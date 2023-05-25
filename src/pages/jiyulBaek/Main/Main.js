import React, { useState, useEffect } from 'react';
import Nav from './component/Nav';
import Feed from './component/Feed';
import { FOOTER_INFO_LIST } from './data/footer-info-list.js';
import { STORY_LIST } from './data/story-list.js';
import { RECOMMEND_LIST } from './data/recommend-list';
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
              {STORY_LIST.map(category => {
                return (
                  <li key={category.id}>
                    <img
                      src={category.src}
                      alt={`account${category.account}Profile`}
                    />
                    <div className="account-detail">
                      <p>{category.account}</p>
                      <p>{category.time}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="recommend">
            <div className="recommend-header">
              <p>회원님을 위한 추천</p>
              <span>모두 보기</span>
            </div>
            <ul className="recommend-list">
              {RECOMMEND_LIST.map(account => {
                return (
                  <li key={account.id}>
                    <img src={account.src} alt={`accountImage${account.id}`} />
                    <div className="recommend-account">
                      <p>{account.account}</p>
                      <p>{account.follow}</p>
                    </div>
                    <button>팔로우</button>
                  </li>
                );
              })}
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
