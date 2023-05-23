import React from 'react';

const Comment = ({ id, comment, account }) => {
  return (
    <li className="comment" id={id}>
      <span className="comment-account">{account}</span>
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
