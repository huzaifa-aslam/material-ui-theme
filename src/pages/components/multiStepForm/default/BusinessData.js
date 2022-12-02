import { forwardRef } from 'react';
import { useForm } from 'react-hook-form';

const BusinessData = ({ formData, setFormData }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setFormData({
      ...formData,
      ...data,
    });

    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit((e) => onSubmit(e))}>
      <input type="text" {...register('firstName')} />
      <input type="number" {...register('lastName')} />
    </form>
  );
};

export default forwardRef(BusinessData);
