import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import './Comment.scss';

const Comment = props => {
  const displayComment = props.commentList.map((comment, index) => (
    <div className="commentAndBtns" id="likeAndDelete" key={index}>
      <div className="comment">
        <span className="bold floatLeft">wecode_bootcamp</span>
        {comment.toString()}
      </div>
      <button className="deleteBtn lighter" type="button">
        삭제
      </button>
      <button className="likeBtn" type="button">
        <img src="./images/jahyunSon/heart-empty.svg" alt="heart" />
      </button>
    </div>
  ));

  return displayComment;
};

export default Comment;
