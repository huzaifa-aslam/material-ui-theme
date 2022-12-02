import { useForm } from 'react-hook-form';

const LoginInfo = ({ formData, setFormData }) => {
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
      <label htmlFor="email">
        E-mail
        <input type="text" {...register('email')} />
      </label>
      <label htmlFor="password">
        Password
        <input type="password" {...register('password')} />
      </label>
      <button type="submit">helooooo</button>
    </form>
  );
};

export default LoginInfo;
