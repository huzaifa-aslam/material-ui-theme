import { useForm } from 'react-hook-form';

const PersonalInfo = ({ formData, setFormData }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setFormData({
      ...formData,
      ...data,
    });

    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="firstName">
        First Name
        <input type="text" {...register('firstName')} />
      </label>
      <label htmlFor="lastName">
        Last Name
        <input type="text" {...register('lastName')} />
      </label>
      <label htmlFor="address">
        Last Name
        <input type="text" {...register('address')} />
      </label>
      <label htmlFor="city">
        Last Name
        <input type="text" {...register('city')} />
      </label>
      <label htmlFor="state">
        Last Name
        <input type="text" {...register('state')} />
      </label>
      <label htmlFor="birthDate">
        Last Name
        <input type="text" {...register('birthDate')} />
      </label>
      <label htmlFor="phoneNumber">
        Last Name
        <input type="text" {...register('phoneNumber')} />
      </label>
      <button type="submit">helooooo</button>
    </form>
  );
};

export default PersonalInfo;
