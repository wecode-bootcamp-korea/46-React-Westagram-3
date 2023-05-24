import React, { useState, useEffect, useRef } from 'react';
import Comment from './Comment';

const Feed = ({ feed, inputValue, setInputValue }) => {
  const [commentList, setCommentList] = useState([]);
  const nextId = useRef(0);
  const [targetId, setTargetId] = useState(0);

  useEffect(() => {
    fetch('/data/commentData.json')
      .then(res => res.json())
      .then(data => {
        setCommentList(data);
      });
  }, []);

  const addComment = () => {
    if (inputValue !== '') {
      setCommentList([
        ...commentList,
        {
          id: nextId.current++,
          feedId: Number(targetId),
          username: 'jy_baek',
          comment: inputValue,
        },
      ]);
      setInputValue('');
    }
  };

  const handleKeyUp = event => {
    const key = event.code;
    if (key === 'Enter') {
      addComment();
    }
  };

  const deleteComment = id => {
    setCommentList(item => item.filter(el => el.id !== id));
  };

  const prevComments = commentList.filter(
    comment => comment.feedId === feed.id
  );
  return (
    <div className="feed" key={feed.id}>
      <div className="top">
        <div className="top-logo">
          <img src={`${feed.account_url}`} alt={`accountImage${feed.id}`} />
          <span>{feed.username}</span>
        </div>
        <div className="top-icon">
          <img
            className="fa-ellipsis"
            src="/images/jiyulBaek/ellipsis.png"
            alt="ellipsis"
          />
        </div>
      </div>
      <div className="image">
        <img src={`${feed.feed_url}`} alt="feedImage" />
      </div>
      <div className="feed-icons">
        <div className="feed-icons-left">
          <img
            className="fa-heart"
            src="/images/jiyulBaek/heart_white.png"
            alt="unclicked_heart"
          />
          <img
            className="fa-comment"
            src="/images/jiyulBaek/comment.png"
            alt="comment-icon"
          />
          <img
            className="fa-arrow-up-from-bracket"
            src="/images/jiyulBaek/ArrowUpFromBracket.png"
            alt="share-icon"
          />
        </div>
        <div className="feed-icons-right">
          <img
            className="fa-bookmark"
            src="/images/jiyulBaek/bookmark.png"
            alt="bookmark-icon"
          />
        </div>
      </div>
      <div className="likes">
        <img
          src="https://images.unsplash.com/photo-1587161584760-f51779fb276a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="accountImage2"
        />
        <span>
          <span className="likesInfo">aineworld</span>님 외
          <span className="likesInfo">10명</span>이 좋아합니다.
        </span>
      </div>
      <div className="contents">
        <span className="contents-account">{feed.username}</span>
        <span>{feed.content}</span>
        <span>더 보기</span>
        <div>42분 전</div>
      </div>

      <ul className="comment-list">
        {prevComments.map(comment => (
          <Comment
            key={comment.id}
            id={comment.id}
            comment={comment.comment}
            account={comment.username}
            deleteComment={deleteComment}
          />
        ))}
      </ul>
      <div className="comment-input">
        <input
          key={feed.id}
          id={feed.id}
          value={inputValue}
          type="text"
          onChange={event => {
            setInputValue(event.target.value);
            setTargetId(event.target.id);
          }}
          onKeyUp={handleKeyUp}
          placeholder="댓글 달기"
        />
        <button onClick={addComment}>게시</button>
      </div>
    </div>
  );
};

export default Feed;
