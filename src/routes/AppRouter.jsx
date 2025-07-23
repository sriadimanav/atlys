import { Routes, Route } from 'react-router';
import Feed from '@pages/Feed';
import SignIn from '@pages/SignIn';
import SignUp from '@pages/SignUp';

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Feed />} />
    <Route path="/signin" element={<SignIn />} />
    <Route path="/signup" element={<SignUp />} />
  </Routes>
);

export default AppRouter;
