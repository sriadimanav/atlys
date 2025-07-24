import { useForm } from 'react-hook-form';

import styles from './styles.module.scss';
import Text from '@components/Text';
import { useAuth } from '@hooks/useAuth';
import { useNavigate } from 'react-router';

const Form = ({ page, setShowModal }) => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();

  const passwordVal = watch('password');

  const navigate = useNavigate();

  const { login } = useAuth();

  const onSignInFormSubmit = data => {
    if (!data) return;
    const usersCreds = JSON.parse(sessionStorage.getItem('usersCreds'));

    const user = usersCreds.find(
      u => u.email === data.email?.trim() && u.password === data.password?.trim(),
    );

    if (user) {
      login();
      setShowModal?.(false);
      navigate('/');
      clearErrors('userNotFound');
    } else {
      setError('userNotFound', {
        type: 'userNotFound',
        message: 'Invalid Credentials',
      });
    }
  };

  const onSignUpFormSubmit = data => {
    if (!data) return;

    const usersCreds = JSON.parse(sessionStorage.getItem('usersCreds'));

    sessionStorage.setItem(
      'usersCreds',
      JSON.stringify([...usersCreds, { email: data.email, password: data.password }]),
    );

    login();
    setShowModal?.(false);
    navigate('/');
  };

  const emailConfig =
    page === 'signin'
      ? {
          required: {
            value: true,
            message: 'This field is required',
          },
        }
      : {
          required: {
            value: true,
            message: 'This field is required',
          },
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
            message: 'Please enter valid email',
          },
        };

  const emailField = () => (
    <div key={'email'}>
      <Text as="label" htmlFor="email" className={styles.label} weight={500} size={14}>
        Email or username
      </Text>
      <input
        {...register('email', emailConfig)}
        onChange={() => clearErrors('userNotFound')}
        type="email"
        placeholder="Enter your email or username"
        id="email"
        className={styles.input}
        style={{ marginBottom: errors?.email ? '5px' : '10px' }}
      />
      {errors?.email && (
        <Text size={12} color="tomato" className={styles.errorText}>
          {errors?.email?.message}
        </Text>
      )}
    </div>
  );

  const passwordConfig =
    page === 'signin'
      ? {
          required: { value: true, message: 'This field is required' },
        }
      : {
          required: { value: true, message: 'This field is required' },
          minLength: { value: 8, message: 'Password is too short' },
          pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
            message: 'Please enter valid password',
          },
        };

  const passwordField = () => (
    <div key={'password'}>
      <Text as="label" htmlFor="password" className={styles.label} weight={500} size={14}>
        Password
      </Text>
      <input
        {...register('password', passwordConfig)}
        onChange={() => clearErrors('userNotFound')}
        type="password"
        placeholder="Enter your password"
        id="password"
        className={styles.input}
        style={{ marginBottom: errors?.password ? '5px' : '10px' }}
      />
      {errors?.password && (
        <Text size={12} color="tomato" className={styles.errorText}>
          {errors?.password?.message}
        </Text>
      )}
    </div>
  );

  const confirmPasswordField = () => (
    <div key={'confirmPassword'}>
      <Text as="label" htmlFor="confirmPassword" className={styles.label} weight={500} size={14}>
        Repeat Password
      </Text>
      <input
        {...register('confirmPassword', {
          required: {
            value: true,
            message: 'This field is required',
          },
          validate: confirmPasswordVal =>
            confirmPasswordVal === passwordVal || 'Password did not match',
        })}
        type="password"
        placeholder="Enter your password again"
        id="confirmPassword"
        className={styles.input}
        style={{ marginBottom: errors?.confirmPassword ? '5px' : '10px' }}
      />
      {errors?.confirmPassword && (
        <Text size={12} color="tomato" className={styles.errorText}>
          {errors?.confirmPassword?.message}
        </Text>
      )}
    </div>
  );

  const pageMap = {
    signin: [emailField, passwordField],
    signup: [emailField, passwordField, confirmPasswordField],
  };

  return (
    <form
      onSubmit={
        page === 'signin' ? handleSubmit(onSignInFormSubmit) : handleSubmit(onSignUpFormSubmit)
      }
      className={styles.form}>
      {pageMap[page].map(field => field())}

      <button className={styles.btn} type="submit">
        {page === 'signin' ? 'Sign In' : 'Sign Up'}
      </button>

      {errors?.userNotFound && (
        <Text size={12} color="tomato" className={styles.errorText}>
          {errors?.userNotFound?.message}
        </Text>
      )}
    </form>
  );
};

export default Form;
