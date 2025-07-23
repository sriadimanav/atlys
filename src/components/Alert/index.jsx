import { X } from 'lucide-react';
import styles from './index.module.scss';

const Alert = ({ message, type = 'info', onClose }) => {
  return (
    <div className={`${styles.alert} ${styles[type]}`}>
      <span>{message}</span>
      {onClose && <X size={16} className={styles.close} onClick={onClose} />}
    </div>
  );
};

export default Alert;
