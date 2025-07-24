import { LogIn, Webhook } from 'lucide-react';
import { useNavigate } from 'react-router';

import Text from '@components/Text';

import styles from './styles.module.scss';
import { useAuth } from '@hooks/useAuth';

const Header = ({ type }) => {
  const navigate = useNavigate();

  const { isAuthenticated, logout } = useAuth();

  const LandingAction = (
    <>
      {isAuthenticated ? (
        <Text
          size={16}
          weight="bold"
          color="black"
          onClick={() => {
            logout();
            navigate('/signin');
          }}>
          logout
        </Text>
      ) : (
        <Text size={16} weight="bold" color="black" onClick={() => navigate('/signin')}>
          login
        </Text>
      )}

      <LogIn color="black" size={18} />
    </>
  );

  const AuthAction = (
    <Text size={16} weight="bold" color="black" onClick={() => navigate('/')}>
      Back to home
    </Text>
  );

  const typeMap = {
    landing: LandingAction,
    auth: AuthAction,
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftBox}>
        <Webhook color="black" size={18} />
        <Text size={16} weight="bold" color="black" onClick={() => navigate('/')}>
          foo-rum
        </Text>
      </div>

      <div></div>

      <div className={styles.rightBox}>{typeMap[type]}</div>
    </div>
  );
};

export default Header;
