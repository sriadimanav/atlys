import { atom } from 'jotai';

export const toastsAtom = atom([]);

export const addToastAtom = atom(null, (get, set, { content, sticky = false }) => {
  const id = crypto.randomUUID();
  const newToast = { id, content, sticky };
  const currentToasts = get(toastsAtom);
  set(toastsAtom, [newToast, ...currentToasts]);

  if (!sticky) {
    setTimeout(() => {
      set(toastsAtom, prev => prev.filter(toast => toast.id !== id));
    }, 3000);
  }
});

export const removeToastAtom = atom(null, (get, set, id) => {
  set(toastsAtom, prev => prev.filter(toast => toast.id !== id));
});
