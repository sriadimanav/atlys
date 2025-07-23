import { Heart, MessageSquareText, Send } from 'lucide-react';

import styles from './styles.module.scss';
import { useState } from 'react';
import { formatTime } from '@utils/formatTime';
import { useAuth } from '@hooks/useAuth';

const FeedPost = ({ post, setShowModal }) => {
  const [liked, setLiked] = useState(false);
  const [animate, setAnimate] = useState(false);

  const { isAuthenticated } = useAuth();

  const handleHeartClick = () => {
    setLiked((prev) => !prev);
    setAnimate(true);
    setTimeout(() => setAnimate(false), 300);
  };

  const handleActionClick = (action) => {
    if (!isAuthenticated) {
      setShowModal(true);
      return;
    }
    if (action === 'Like') handleHeartClick();
    else alert(`${action} functionality not implemented`);
  };

  return (
    <div className={styles.post}>
      <div className={styles.postBody}>
        <div className={styles.userProfile}>
          <img src={post.avatar} alt={post.name} className={styles.avatar} />
          <div className={styles.meta}>
            <span className={styles.name}>{post.name}</span>
            <span className={styles.time}>{formatTime(post.time)}</span>
          </div>
        </div>

        <div className={styles.postContent}>
          <p className={styles.mood}>{post.mood}</p>
          <p className={styles.content}>{post.content}</p>
        </div>
      </div>

      <div className={styles.actions}>
        <Heart
          onClick={() => handleActionClick('Like')}
          className={`${styles.icon} ${liked ? styles.liked : ''} ${animate ? styles.animate : ''}`}
          size={16}
          color="#222831"
        />
        <MessageSquareText
          onClick={() => handleActionClick('Comment')}
          className={styles.icon}
          size={16}
          color="#222831"
        />
        <Send
          onClick={() => handleActionClick('Share')}
          className={styles.icon}
          size={16}
          color="#222831"
        />
      </div>
    </div>
  );
};

export default FeedPost;
