import { useState, useRef, useEffect } from 'react';
import styles from './styles.module.scss';

const Dropdown = ({
  options = [],
  defaultValue,
  placeholder = 'Select',
  onSelect,
}) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue || null);
  const dropdownRef = useRef();

  const handleToggle = () => setOpen((prev) => !prev);

  const handleOptionClick = (option) => {
    setSelected(option);
    setOpen(false);
    onSelect?.(option);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!dropdownRef.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <div className={styles.toggle} onClick={handleToggle}>
        {selected?.label || placeholder}
        <span className={`${styles.arrow} ${open ? styles.open : ''}`}>▾</span>
      </div>

      {open && (
        <div className={styles.menu}>
          {options.map((option) => (
            <div
              key={option.value}
              className={styles.item}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
