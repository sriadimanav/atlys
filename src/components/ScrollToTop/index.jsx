import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    setVisible(window.scrollY > 150);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button onClick={scrollToTop} className={styles.scrollToTop}>
      ☝️ Scroll to Top
    </button>
  );
};

export default ScrollToTop;
