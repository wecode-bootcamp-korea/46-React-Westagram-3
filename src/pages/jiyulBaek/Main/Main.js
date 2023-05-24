import React, { useState, useEffect, useRef } from 'react';
import Comment from './Comment';
import { FOOTER_INFO_LIST } from './data/data.js';
import './Main.scss';

function MainJiyul() {
  const [inputValue, setInputValue] = useState('');

  const [feedList, setFeedList] = useState([]);
  const [commentList, setCommentList] = useState([]);

  const nextId = useRef(0);
  const [targetId, setTargetId] = useState(0);

  useEffect(() => {
    fetch('/data/feedData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setFeedList(data);
      });
  }, []);

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
          {feedList.length &&
            feedList.map(feed => {
              const prevComments = commentList.filter(
                comment => comment.feedId === feed.id
              );

              return (
                <div className="feed" key={feed.id}>
                  <div className="top">
                    <div className="top-logo">
                      <img
                        src={`${feed.account_url}`}
                        alt={`accountImage${feed.id}`}
                      />
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
            })}
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
