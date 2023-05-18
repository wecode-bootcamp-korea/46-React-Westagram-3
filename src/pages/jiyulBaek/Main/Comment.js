import React from 'react';

const Comment = ({ key, comment }) => {
  return (
    <li className="comment" key={key}>
      <span className="comment-account">jy_baek</span>
      <span>{comment}</span>
      <button>삭제</button>
      <img
        className="fa-heart"
        src="/images/jiyulBaek/heart_white.png"
        alt="unclicked_heart"
      />
    </li>
  );
};

export default Comment;
