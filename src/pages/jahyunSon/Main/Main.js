import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';
import { FOOTER_INFO_LIST } from './data';
import './Main.scss';

function MainJahyun() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetchUserList();
  }, []);

  const fetchUserList = () => {
    fetch('/data/sample.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setUserList(data);
      });
  };

  return (
    <div className="main">
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
          <button>
            <img
              src="/images/jahyunSon/explore.png"
              alt="explore page"
              className="icon"
            />
          </button>
          <button>
            <img
              src="/images/jahyunSon/heart.png"
              alt="notificaions"
              className="icon"
            />
          </button>
          <button>
            <img
              src="/images/jahyunSon/profile.png"
              alt="my profile"
              className="icon"
            />
          </button>
        </div>
      </nav>

      <main>
        <section className="feed">
          {userList.map(user => {
            return <Post key={user.id} user={user} />;
          })}
        </section>

        <aside className="main-right">
          <section className="myProfile">
            <img
              src="/images/jahyunSon/wecode_logo.png"
              alt="my profile"
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
    </div>
  );
}

export default MainJahyun;
