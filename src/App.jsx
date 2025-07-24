import { useEffect } from 'react';

import AppRouter from '@routes/AppRouter';
import ToastContainer from '@components/Toast/ToastContainer';
import { usersCreds } from '@data/usersCreds';

import './App.scss';

const App = () => {
  useEffect(() => {
    sessionStorage.setItem('usersCreds', JSON.stringify(usersCreds));
  }, []);

  return (
    <>
      <ToastContainer />
      <AppRouter />
    </>
  );
};

export default App;
