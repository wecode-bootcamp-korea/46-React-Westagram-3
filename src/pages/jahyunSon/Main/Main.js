import React, { useState } from 'react';
import Comment from '../Comment/Comment';
import { FOOTER_INFO_LIST } from './data';
import './Main.scss';

function MainJahyun() {
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
    <body className="main">
      <nav>
        <div className="navBarLogo">
          <img
            src="/images/jahyunSon/instagram.png"
            alt="instagram logo"
            className="icon"
          />
          <p className="logo">Westagram</p>
        </div>
        <div className="searchBar">
          <input type="text" placeholder="검색" className="searchInput" />
          <img
            src="/images/jahyunSon/magnifyingGlass.png"
            alt="magnifying glass"
            className="magnifyingGlass"
          />
        </div>
        <div className="iconsOnRight">
          <a href="#">
            <img
              src="/images/jahyunSon/explore.png"
              alt="explore page"
              className="icon"
            />
          </a>
          <a href="#">
            <img
              src="/images/jahyunSon/heart.png"
              alt="notificaions"
              className="icon"
            />
          </a>
          <a href="#">
            <img
              src="/images/jahyunSon/profile.png"
              alt="my profile"
              className="icon"
            />
          </a>
        </div>
      </nav>

      <main>
        <section className="feed">
          <article className="post">
            <header className="postHeader">
              <div className="userInfo">
                <img
                  src="/images/jahyunSon/feedProfile.jpeg"
                  alt="profile"
                  className="pfp"
                />
                <p className="username bold">hand_jahyun</p>
              </div>
              <img
                src="/images/jahyunSon/threedots.png"
                alt="view more"
                className="icon"
              />
            </header>
            <img
              src="/images/jahyunSon/feed1.png"
              alt="feed"
              className="feedImg"
            />
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
              <span className="username bold">hand_jahyun</span> 제주도 바다~...{' '}
              <span className="light">더 보기</span>
            </p>
            <section className="commentSection">
              <div className="commentsList">
                <div className="commentAndBtns" id="likeAndDelete">
                  <div className="comment">
                    <span className="bold floatLeft">taylorswift</span> Wow
                    beautiful~
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
                >
                  게시
                </button>
              </form>
            </section>
          </article>
        </section>

        <aside className="main-right">
          <section className="myProfile">
            <img
              src="/images/jahyunSon/wecode_logo.png"
              alt="my profile picture"
              className="myPfp"
            />
            <div className="myHandle">
              <span className="username bold">wecode_bootcamp</span>
              <span className="light">WeCode | 위코드</span>
            </div>
          </section>
          <section className="story">
            <div className="header">
              <span className="light">스토리</span>
              <span className="viewMoreButton">모두 보기</span>
            </div>
            <div className="profileList">
              <div className="profile">
                <img
                  src="/images/jahyunSon/pfp1.jpeg"
                  alt="profile"
                  className="pfp"
                />
                <div className="otherUserInfo">
                  <span className="username bold">taylorswift</span>
                  <span className="light">16분 전</span>
                </div>
              </div>
              <div className="profile">
                <img
                  src="/images/jahyunSon/pfp2.jpeg"
                  alt="profile"
                  className="pfp"
                />
                <div className="otherUserInfo">
                  <span className="username bold">billieeilish</span>
                  <span className="light">3시간 전</span>
                </div>
              </div>
              <div className="profile">
                <img
                  src="/images/jahyunSon/pfp6.jpeg"
                  alt="profile"
                  className="pfp"
                />
                <div className="otherUserInfo">
                  <span className="username bold">shawnmendes</span>
                  <span className="light">20시간 전</span>
                </div>
              </div>
            </div>
          </section>
          <section className="suggestedForYou">
            <div className="header">
              <span className="light">회원님을 위한 추천</span>
              <span className="viewMoreButton">모두 보기</span>
            </div>
            <div className="profileList">
              <div className="profile">
                <img
                  src="/images/jahyunSon/pfp3.jpeg"
                  alt="profile"
                  className="pfp"
                />
                <div className="otherUserInfo">
                  <span className="username bold">kyliejenner</span>
                  <span className="light">_legend_a님 외 2명이 ...</span>
                </div>
              </div>
              <div className="profile">
                <img
                  src="/images/jahyunSon/pfp4.jpeg"
                  alt="profile"
                  className="pfp"
                />
                <div className="otherUserInfo">
                  <span className="username bold">arianagrande</span>
                  <span className="light">ringo.in.seoul님 외 12...</span>
                </div>
              </div>
              <div className="profile">
                <img
                  src="/images/jahyunSon/pfp5.jpeg"
                  alt="profile"
                  className="pfp"
                />
                <div className="otherUserInfo">
                  <span className="username bold">justinbieber</span>
                  <span className="light">jimmylee1220님 외 1...</span>
                </div>
              </div>
            </div>
          </section>
          <footer>
            {FOOTER_INFO_LIST.map(info => (
              <span className="lighter footerList" key={info.id}>
                <a href="#" className="info">
                  {info.text}
                </a>
                &nbsp;•&nbsp;
              </span>
            ))}
            <p className="lighter">© 2023 INSTAGRAM</p>
          </footer>
        </aside>
      </main>
    </body>
  );
}

export default MainJahyun;
