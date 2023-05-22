import React, { useState } from 'react';
import Comment from './Comment';
import './Main.scss';

function MainJiyul() {
  const [inputValue, setInputValue] = useState('');
  const [comments, setComments] = useState([{ id: 1, comment: '' }]);

  const addComment = () => {
    if (inputValue !== '') {
      setComments([
        ...comments,
        {
          id: comments[comments.length - 1].id + 1,
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

  return (
    <>
      <header>
        <nav id="nav-bar">
          <div className="logo">
            <img
              className="logo-img"
              src="/images/jiyulBaek/instagram.png"
              alt="logo"
            />
            <a href="/">WESTAGRAM</a>
          </div>
          <div className="search-bar">
            <img
              className="fa-magnifying-glass"
              src="/images/jiyulBaek/magnifyingglass.png"
              alt="logo"
            />
            <input type="text" placeholder="검색" />
            {/* <div className="searchBarMenu">
              <div className="result-box-triangle none"></div>
              <ul className="result-box"></ul>
            </div> */}
          </div>
          <div className="nav-right">
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
              alt="explore"
            />
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              alt="heart"
            />
            <img
              className="navProfileImg"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              alt="profile"
            />
          </div>
        </nav>
        {/* <div className="navProfile">
          <div className="nav-profile-triangle disabled" />
          <ul className="nav-profile-menu-bar disabled">
            <li className="nav-profile-menu">
              <img
                className="fa-user"
                src="/images/jiyulBaek/user.png"
                alt="user-icon"
              />
              <span>프로필</span>
            </li>
            <li className="nav-profile-menu">
              <img
                className="fa-bookmark"
                src="/images/jiyulBaek/bookmark.png"
                alt="bookmark-icon"
              />
              <span>저장됨</span>
            </li>
            <li className="nav-profile-menu">
              <img
                className="fa-gear"
                src="/images/jiyulBaek/gear.png"
                alt="setting-icon"
              />
              <span>설정</span>
            </li>
            <li className="nav-profile-menu">로그아웃</li>
          </ul>
        </div> */}
      </header>

      <main>
        <section className="feeds">
          <div className="top">
            <div className="top-logo">
              <img
                src="https://images.unsplash.com/photo-1507166763745-bfe008fbb831?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="accountImage1"
              />
              <span>jy_baek</span>
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
            <img src="/images/jiyulBaek/feed.jpg" alt="feedImage" />
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
            <span className="contents-account">jy_baek</span>
            <span>위워크에서 진행된 베이킹 클래스...</span>
            <span>더 보기</span>
            <div>42분 전</div>
          </div>

          <ul className="comment-list">
            {comments.map(comment => (
              <Comment key={comment.id} comment={comment.comment} />
            ))}
          </ul>

          <div className="comment-input">
            <input
              value={inputValue}
              type="text"
              onChange={event => setInputValue(event.target.value)}
              onKeyUp={handleKeyUp}
              placeholder="댓글 달기"
            />
            <button onClick={addComment}>게시</button>
          </div>
        </section>

        <section className="main-right">
          <div className="account">
            <img
              src="https://images.unsplash.com/photo-1507166763745-bfe008fbb831?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="accountImage3"
            />
            <div className="account-info">
              <p>jy_baek</p>
              <p>wecode | 백지율</p>
            </div>
          </div>
          <div className="story">
            <div className="story-header">
              <p>스토리</p>
              <span>모두 보기</span>
            </div>
            <ul className="story-list">
              <li>
                <img
                  src="https://images.unsplash.com/photo-1587161584760-f51779fb276a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt="accountImage4"
                />
                <div className="account-detail">
                  <p>studyholmes</p>
                  <p>16분 전</p>
                </div>
              </li>
              <li>
                <img
                  src="https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt="accountImage5"
                />
                <div className="account-detail">
                  <p>writeanddraw</p>
                  <p>3시간 전</p>
                </div>
              </li>
              <li>
                <img
                  src="https://images.unsplash.com/photo-1532911557891-d12f6b98dddc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=477&q=80"
                  alt="accountImage6"
                />
                <div className="account-detail">
                  <p>shadezahrai</p>
                  <p>20시간 전</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="recommend">
            <div className="recommend-header">
              <p>회원님을 위한 추천</p>
              <span>모두 보기</span>
            </div>
            <ul className="recommend-list">
              <li>
                <img
                  src="https://images.unsplash.com/photo-1557800636-894a64c1696f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
                  alt="accountImage7"
                />
                <div className="recommend-account">
                  <p>daebaki.wow</p>
                  <p>catpuppy님 외 12명이...</p>
                </div>
                <button>팔로우</button>
              </li>
              <li>
                <img
                  src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=841&q=80"
                  alt="accountImage8"
                />
                <div className="recommend-account">
                  <p>kyeonghunbae</p>
                  <p>agnesBaek님 외 21명이...</p>
                </div>
                <button>팔로우</button>
              </li>
              <li>
                <img
                  src="https://images.unsplash.com/photo-1578925518470-4def7a0f08bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
                  alt="accountImage9"
                />
                <div className="recommend-account">
                  <p>nomad.planner</p>
                  <p>nomadcoder님 외 7명이...</p>
                </div>
                <button>팔로우</button>
              </li>
            </ul>
          </div>
          <div className="footer">
            {FOOTER_INFO_LIST.map(category => {
              return <span key={category.id}>{category.span} </span>;
            })}
            <p>ⓒ 2019 INSTAGRAM</p>
          </div>
        </section>
      </main>
    </>
  );
}

export default MainJiyul;

const FOOTER_INFO_LIST = [
  { id: 0, span: 'Instagram 정보' },
  { id: 1, span: '지원 ·' },
  { id: 2, span: '홍보센터 ·' },
  { id: 3, span: 'API ·' },
  { id: 4, span: '채용정보 ·' },
  { id: 5, span: '약관 ·' },
  { id: 6, span: '디렉터리 ·' },
  { id: 7, span: '프로필 ·' },
  { id: 8, span: '해시태그 ·' },
  { id: 9, span: '언어' },
];
