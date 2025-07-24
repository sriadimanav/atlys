import { useSetAtom } from 'jotai';

import { addToastAtom, removeToastAtom } from '@atoms/toastAtom';

export const useToast = () => {
  const add = useSetAtom(addToastAtom);
  const remove = useSetAtom(removeToastAtom);

  return {
    addToast: add,
    removeToast: remove,
  };
};
