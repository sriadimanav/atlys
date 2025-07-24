import { useState } from 'react';
import {
  Plus,
  Mic,
  Video,
  SendHorizontal,
  Smile,
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  Quote,
  CodeXml,
  Trash2,
} from 'lucide-react';
import { useAtom } from 'jotai';

import Dropdown from '@components/Dropdown';

import useEmojiPicker from '@hooks/useEmojiPicker';
import { moodAtom } from '@atoms/moodAtom';
import { useAuth } from '@hooks/useAuth';

import styles from './styles.module.scss';
import { useToast } from '@hooks/useToast';

const PostEditor = ({ onPublish, setShowModal }) => {
  const [text, setText] = useState('');

  const [mood, setMood] = useAtom(moodAtom);

  const { isAuthenticated } = useAuth();

  const { addToast } = useToast();

  const { picker, toggle } = useEmojiPicker({ onSelect: setMood });

  const handleSubmit = () => {
    if (text.trim()) {
      onPublish(text.trim());
      setText('');
    }
  };

  const handleParentClick = e => {
    if (!isAuthenticated) {
      e.stopPropagation(); // Prevent click events from propagating to children
      e.preventDefault(); // Optional: prevent any default behavior
      setShowModal(true);
      return;
    }
  };

  const handleActionClick = action => {
    addToast({ content: `🔔 ${action} functionality not implemented` });
  };

  return (
    <div className={styles.container} onMouseDown={handleParentClick}>
      {picker}

      <div className={styles.editor}>
        <div className={styles.tools}>
          <div className={styles.styleTools}>
            <Dropdown
              options={[{ value: 'paragraph', label: 'Paragraph' }]}
              defaultValue={{ value: 'paragraph', label: 'Paragraph' }}
            />
            <div></div>
            <Bold
              className={styles.icon}
              size={16}
              color="#222831"
              onClick={() => handleActionClick('Bold')}
            />
            <Italic
              className={styles.icon}
              size={16}
              color="#222831"
              onClick={() => handleActionClick('Italic')}
            />
            <Underline
              className={styles.icon}
              size={16}
              color="#222831"
              onClick={() => handleActionClick('Underline')}
            />
            <div className={styles.separator}></div>
            <List
              className={styles.icon}
              size={16}
              color="#222831"
              onClick={() => handleActionClick('List')}
            />
            <ListOrdered
              className={styles.icon}
              size={16}
              color="#222831"
              onClick={() => handleActionClick('Ordered List')}
            />
            <div className={styles.separator}></div>
            <Quote
              className={styles.icon}
              size={16}
              color="#222831"
              onClick={() => handleActionClick('Quote')}
            />
            <CodeXml
              className={styles.icon}
              size={16}
              color="#222831"
              onClick={() => handleActionClick('Code Snippet')}
            />
          </div>

          <div></div>

          <div className={styles.clearText}>
            <Trash2 className={styles.icon} size={16} color="#DC3C22" onClick={() => setText('')} />
          </div>
        </div>

        <div className={styles.post}>
          {mood ? (
            <p className={styles.moodEmojiSelected} onClick={toggle}>
              {mood}
            </p>
          ) : (
            <Smile size={16} color="#4f5bd5" className={styles.moodEmojiInitial} onClick={toggle} />
          )}

          <textarea
            placeholder="What's on your mind?"
            value={text}
            onChange={e => setText(e.target.value)}
            className={styles.textarea}
          />
        </div>

        <div className={styles.actions}>
          <div className={styles.iconBox}>
            <Plus
              className={styles.icon}
              size={16}
              color="#222831"
              onClick={() => handleActionClick('Add File')}
            />
          </div>
          <Mic
            className={styles.icon}
            size={16}
            color="#222831"
            onClick={() => handleActionClick('Audio')}
          />
          <Video
            className={styles.icon}
            size={16}
            color="#222831"
            onClick={() => handleActionClick('Camera')}
          />
          <div></div>
          <SendHorizontal
            className={styles.icon}
            onClick={handleSubmit}
            fill="#0065F8"
            size={20}
            color="#0065F8"
          />
        </div>
      </div>
    </div>
  );
};

export default PostEditor;
