import { useState } from 'react';
import { useAtom } from 'jotai';

import PostEditor from '@components/PostEditor';
import FeedPost from '@components/FeedPost';
import Header from '@components/Header';
import ScrollToTop from '@components/ScrollToTop';
import Modal from '@components/Modal';
import { SignInForm } from '@pages/SignIn';
import { SignUpForm } from '@pages/SignUp';

import { moodAtom } from '@atoms/moodAtom';
import useEmojiPicker from '@hooks/useEmojiPicker';
import { dummyPosts } from '@data/dummyPosts';
import { formatTime } from '@utils/formatTime';
import { useToast } from '@hooks/useToast';

import styles from './styles.module.scss';

const Feed = () => {
  const [posts, setPosts] = useState(dummyPosts);
  const [showModal, setShowModal] = useState(false);
  const [formType, setFormType] = useState('signin');

  const [mood, setMood] = useAtom(moodAtom);

  const { show } = useEmojiPicker({ onSelect: () => {} });

  const { addToast } = useToast();

  const handlePublish = text => {
    if (!text.trim()?.length) return;

    if (!mood) show();

    const newPost = {
      id: Date.now(),
      name: 'Aditya',
      time: formatTime(Date.now()),
      avatar: `https://avatar.iran.liara.run/public/${posts.length + 1}`,
      mood: mood || '🐥',
      content: text.trim(),
    };

    setPosts([newPost, ...posts]);
    setMood('');
  };

  return (
    <>
      <Header type="landing" />
      <div className={styles.feedContainer}>
        <div className={styles.editorWrapper}>
          <PostEditor onPublish={handlePublish} setShowModal={setShowModal} addToast={addToast} />
        </div>

        <div className={styles.postsList}>
          {posts.map(post => (
            <FeedPost key={post.id} post={post} setShowModal={setShowModal} addToast={addToast} />
          ))}
        </div>

        <Modal visible={showModal} onClose={() => setShowModal(false)}>
          {formType === 'signin' ? (
            <SignInForm secondaryAction={() => setFormType('signup')} setShowModal={setShowModal} />
          ) : (
            <SignUpForm secondaryAction={() => setFormType('signin')} setShowModal={setShowModal} />
          )}
        </Modal>

        <ScrollToTop />
      </div>
    </>
  );
};

export default Feed;
