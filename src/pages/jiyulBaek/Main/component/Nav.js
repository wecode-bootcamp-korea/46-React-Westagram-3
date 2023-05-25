import React from 'react';

const Nav = () => {
  return (
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
  );
};

export default Nav;
