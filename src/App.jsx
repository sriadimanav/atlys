import AppRouter from '@routes/AppRouter';

import './App.scss';
import { useEffect } from 'react';
import { usersCreds } from '@data/usersCreds';

const App = () => {
  useEffect(() => {
    sessionStorage.setItem('usersCreds', JSON.stringify(usersCreds));
  }, []);
  return <AppRouter />;
};

export default App;
