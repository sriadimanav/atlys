import { useAtom } from 'jotai';
import { authAtom, setAuthAtom } from '@atoms/authAtom';

export const useAuth = () => {
  const [auth] = useAtom(authAtom);
  const [, setAuth] = useAtom(setAuthAtom);

  const login = () => setAuth({ isAuthenticated: true });
  const logout = () => setAuth({ isAuthenticated: false });

  return { ...auth, login, logout };
};
