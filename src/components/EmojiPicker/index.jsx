import styles from './styles.module.scss';

const emojiList = ['😀', '😂', '😍', '😎', '😭', '😡', '👍', '🎉', '❤️'];

const EmojiPicker = ({ isVisible, onSelect, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className={styles.emojiGrid}>
      {emojiList.map((emoji, index) => (
        <span
          key={index}
          className={styles.emoji}
          onClick={() => {
            onSelect(emoji);
            onClose?.();
          }}>
          {emoji}
        </span>
      ))}
    </div>
  );
};

export default EmojiPicker;
