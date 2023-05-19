import React from 'react';
import './Comment.scss';

const Comment = props => {
  const displayComment = props.commentList.map((comment, index) => (
    <div className="commentAndBtns" id="likeAndDelete" key={index}>
      <div className="comment">
        <span className="bold floatLeft">wecode_bootcamp</span>
        {comment.toString()}
      </div>
      <button
        className="deleteBtn lighter hidden"
        type="button"
        id="deleteBtn0"
      >
        삭제
      </button>
      <button className="likeBtn" type="button" id="likeBtn">
        <i className="fa fa-heart" id="likeBtn"></i>
      </button>
    </div>
  ));

  return displayComment;
};

export default Comment;
