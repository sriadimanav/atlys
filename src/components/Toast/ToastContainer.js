import { useAtomValue, useSetAtom } from 'jotai';
import { CircleX } from 'lucide-react';

import { toastsAtom, removeToastAtom } from '@atoms/toastAtom';

import styles from './styles.module.scss';

const ToastContainer = () => {
  const toasts = useAtomValue(toastsAtom);
  const removeToast = useSetAtom(removeToastAtom);

  return (
    <div className={styles.toastWrapper}>
      {toasts.map((toast, index) => (
        <div
          key={toast.id}
          className={styles.toast}
          style={{
            transform: `translateY(${index * 10}px) scale(${1 - index * 0.03})`,
            zIndex: 1000 - index,
            opacity: 1 - index * 0.08,
          }}>
          <div className={styles.toastContent}>{toast.content}</div>
          <button className={styles.closeBtn} onClick={() => removeToast(toast.id)}>
            <CircleX size={14} color="grey" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ToastContainer;
