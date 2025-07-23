import { atom } from 'jotai';

const storedAuth = localStorage.getItem('auth');
const initialAuth = storedAuth
  ? JSON.parse(storedAuth)
  : { isAuthenticated: false };

export const authAtom = atom(initialAuth);

export const setAuthAtom = atom(null, (get, set, newState) => {
  localStorage.setItem('auth', JSON.stringify(newState));
  set(authAtom, newState);
});
