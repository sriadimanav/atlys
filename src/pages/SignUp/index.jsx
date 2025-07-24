import { useNavigate } from 'react-router';
import { LogIn } from 'lucide-react';

import Text from '@components/Text';
import Header from '@components/Header';
import Form from '@components/Form';

import styles from './styles.module.scss';

export const SignUpForm = ({ secondaryAction, setShowModal }) => {
  return (
    <div className={styles.outerFormBox}>
      <div className={styles.innerFormBox}>
        <div className={styles.iconBox}>
          <LogIn color="black" size={18} />
        </div>

        <Text size={18} weight="bold">
          Create an account to continue
        </Text>
        <Text size={14} color="grey">
          Create an account to access all the features on this app
        </Text>

        <Form page="signup" setShowModal={setShowModal} />
      </div>

      <div>
        <Text as="span" size={14}>
          Already have an account?&nbsp;
        </Text>
        <Text
          onClick={secondaryAction}
          weight="bold"
          as="span"
          color="#007bff"
          size={14}
          className={styles.link}>
          Sign In
        </Text>
      </div>
    </div>
  );
};

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header type="auth" />
      <div className={styles.formContainer}>
        <SignUpForm secondaryAction={() => navigate('/signin')} />
      </div>
    </>
  );
};

export default SignUp;
