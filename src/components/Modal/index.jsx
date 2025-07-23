import { createPortal } from 'react-dom';

import styles from './styles.module.scss';

const Modal = ({ visible = false, onClose, children }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!visible) return null;

  return createPortal(
    <div className={styles.modalBackdrop} onClick={handleBackdropClick}>
      {children}
    </div>,
    document.body,
  );
};

export default Modal;
