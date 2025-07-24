import { LogIn } from 'lucide-react';
import { useNavigate } from 'react-router';

import Text from '@components/Text';
import Header from '@components/Header';
import Form from '@components/Form';

import styles from './styles.module.scss';

export const SignInForm = ({ secondaryAction, setShowModal }) => {
  return (
    <div className={styles.outerFormBox}>
      <div className={styles.innerFormBox}>
        <div className={styles.iconBox}>
          <LogIn color="black" size={18} />
        </div>
        <Text size={18} weight="bold">
          Sign-in to continue
        </Text>
        <Text color="grey" size={14}>
          Sign-in to access all the features on this app
        </Text>

        <Form page="signin" setShowModal={setShowModal} />
      </div>

      <div>
        <Text as="span" size={14}>
          Don't have an account?&nbsp;
        </Text>
        <Text
          as="span"
          weight="bold"
          onClick={secondaryAction}
          color="#007bff"
          size={14}
          className={styles.link}>
          Sign Up
        </Text>
      </div>
    </div>
  );
};

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header type="auth" />
      <div className={styles.formContainer}>
        <SignInForm secondaryAction={() => navigate('/signup')} />
      </div>
    </>
  );
};

export default SignIn;
