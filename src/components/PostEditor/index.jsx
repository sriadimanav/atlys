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

import Dropdown from '@components/Dropdown';
import useEmojiPicker from '@hooks/useEmojiPicker';

import styles from './styles.module.scss';
import { moodAtom } from '@atoms/moodAtom';
import { useAtom } from 'jotai';
import { useAuth } from '@hooks/useAuth';

const PostEditor = ({ onPublish, setShowModal }) => {
  const [text, setText] = useState('');

  const [mood, setMood] = useAtom(moodAtom);

  const { isAuthenticated } = useAuth();

  const { picker, toggle } = useEmojiPicker({ onSelect: setMood });

  const handleSubmit = () => {
    if (text.trim()) {
      onPublish(text.trim());
      setText('');
    }
  };

  return (
    <div className={styles.container}>
      {picker}

      <div
        className={styles.editor}
        onClick={() => !isAuthenticated && setShowModal(true)}
      >
        <div className={styles.tools}>
          <div className={styles.styleTools}>
            <Dropdown
              options={[{ value: 'paragraph', label: 'Paragraph' }]}
              defaultValue={{ value: 'paragraph', label: 'Paragraph' }}
            />
            <div></div>
            <Bold className={styles.icon} size={16} color="#222831" />
            <Italic className={styles.icon} size={16} color="#222831" />
            <Underline className={styles.icon} size={16} color="#222831" />
            <div className={styles.separator}></div>
            <List className={styles.icon} size={16} color="#222831" />
            <ListOrdered className={styles.icon} size={16} color="#222831" />
            <div className={styles.separator}></div>
            <Quote className={styles.icon} size={16} color="#222831" />
            <CodeXml className={styles.icon} size={16} color="#222831" />
          </div>

          <div></div>

          <div className={styles.clearText}>
            <Trash2 className={styles.icon} size={16} color="#DC3C22" />
          </div>
        </div>

        <div className={styles.post}>
          {mood ? (
            <p className={styles.moodEmoji2} onClick={toggle}>
              {mood}
            </p>
          ) : (
            <Smile
              size={16}
              color="#4f5bd5"
              className={styles.moodEmoji}
              onClick={toggle}
            />
          )}

          <textarea
            placeholder="What's on your mind?"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className={styles.textarea}
          />
        </div>

        <div className={styles.actions}>
          <div className={styles.iconBox}>
            <Plus className={styles.icon} size={16} color="#222831" />
          </div>
          <Mic className={styles.icon} size={16} color="#222831" />
          <Video className={styles.icon} size={16} color="#222831" />
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
