import React, { useState } from 'react';
import Comment from '../Comment/Comment';
import './Post.scss';

const Post = ({ user }) => {
  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState([]);

  const postComment = e => {
    setComment(e.target.value);
  };

  const pushCommentList = e => {
    e.preventDefault();
    setCommentList(commentList => [...commentList, comment]);
    setComment('');
  };

  return (
    <article className="post">
      <header className="postHeader">
        <div className="userInfo">
          <img src={user.image} alt="profile" className="pfp" />
          <p className="username bold">{user.username}</p>
        </div>
        <img
          src="/images/jahyunSon/threedots.png"
          alt="view more"
          className="icon"
        />
      </header>
      <img src={user.image} alt="feed" className="feedImg" />
      <div className="interactionBar">
        <div className="interactionBarLeft">
          <img
            src="/images/jahyunSon/redheart.png"
            alt="like"
            className="icon"
          />
          <img
            src="/images/jahyunSon/comment.png"
            alt="comment"
            className="icon"
          />
          <img
            src="/images/jahyunSon/upload.png"
            alt="share"
            className="icon"
          />
        </div>
        <img
          src="/images/jahyunSon/bookmark.png"
          alt="bookmark"
          className="icon"
        />
      </div>
      <div className="likedListContainer">
        <img
          src="/images/jahyunSon/pfp1.jpeg"
          alt="profile"
          className="pfpSmall"
        />
        <p className="likedList">
          <span className="bold">taylorswift</span>님 외{' '}
          <span className="bold">10명</span>이 좋아합니다
        </p>
      </div>
      <p className="caption">
        <span className="username bold">{user.username}</span>{' '}
        {user.address.address}
      </p>
      <section className="commentSection">
        <div className="commentsList">
          <Comment comment={comment} commentList={commentList} />
        </div>
        <form className="postComment">
          <input
            type="text"
            className="commentInput light"
            onChange={e => postComment(e)}
            value={comment}
          />
          <button
            className="commentBtn"
            type="submit"
            onClick={pushCommentList}
            disabled={!comment}
          >
            게시
          </button>
        </form>
      </section>
    </article>
  );
};

export default Post;
