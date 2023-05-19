import React from 'react';
import './DisplayComment.scss';

const DisplayComment = props => {
  return (
    <div className="comment" key={props.index}>
      <span className="bold floatLeft">wecode_bootcamp</span>
      {props.comment.toString()}
    </div>
  );
};
