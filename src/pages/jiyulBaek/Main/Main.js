import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import Feed from './Feed';
import { FOOTER_INFO_LIST } from './data/data.js';
import './Main.scss';

function MainJiyul() {
  const [feedList, setFeedList] = useState([]);

  useEffect(() => {
    fetch('/data/feedData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setFeedList(data);
      });
  }, []);

  return (
    <>
      <Nav />
      <main>
        <section className="feeds">
          {feedList.length &&
            feedList.map(feed => {
              return (
                <Feed
                  key={feed.id}
                  id={feed.id}
                  username={feed.username}
                  content={feed.content}
                  commentList={feed.commentList}
                  account_url={feed.account_url}
                  feed_url={feed.feed_url}
                />
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
