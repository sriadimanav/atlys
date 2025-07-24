import EmojiPickerComp from '@components/EmojiPicker';
import { useState, useCallback, useMemo } from 'react';

const useEmojiPicker = ({ onSelect }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggle = useCallback(() => setIsVisible(prev => !prev), []);
  const show = useCallback(() => setIsVisible(true), []);
  const hide = useCallback(() => setIsVisible(false), []);

  const picker = useMemo(
    () => (
      <EmojiPickerComp
        isVisible={isVisible}
        onSelect={emoji => {
          onSelect(emoji);
          hide(); // auto-close on selection
        }}
        onClose={hide}
      />
    ),
    [isVisible, onSelect, hide],
  );

  return {
    show,
    hide,
    toggle,
    picker, // JSX Element you can render anywhere
  };
};

export default useEmojiPicker;
