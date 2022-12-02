import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import AuthRegisterForm from '../../../sections/auth/AuthRegisterForm';
import { LoginInfo, BusinessData, PersonalInfo } from './default';

const RegisterSteps = () => {
  const [page, setPage] = useState(0);
  const stateRef = useRef();
  const [formData, setFormData] = useState({
    businessName: '',
    zipCode: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    birthDate: '',
    phoneNumber: '',
    socialSecurityNumber: '',
  });

  const conditionalComponent = () => {
    switch (page) {
      case 0:
        return <BusinessData ref={stateRef} formData={formData} setFormData={setFormData} />;
      case 1:
        return <LoginInfo ref={stateRef} formData={formData} setFormData={setFormData} />;
      case 2:
        return <PersonalInfo ref={stateRef} formData={formData} setFormData={setFormData} />;
      case 3:
        return <PersonalInfo ref={stateRef} formData={formData} setFormData={setFormData} />;
      default:
        return <BusinessData ref={stateRef} formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div>
      {conditionalComponent()}
      <button
        onClick={(e) => {
          console.log(stateRef.current);
          stateRef.current.onSubmit(e);
          setPage(page + 1);
        }}
      >
        Next
      </button>
    </div>
  );
};

export default RegisterSteps;
