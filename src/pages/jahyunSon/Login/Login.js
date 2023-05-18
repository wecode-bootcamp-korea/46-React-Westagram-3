import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const LoginJahyun = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [disabled, setDisabled] = useState(true);

  const goToMain = () => {
    navigate('/main-jahyun');
  };

  const saveUserId = event => {
    setUserId(event.target.value);
    isUserInfoValid(event.target.value, userPassword);
  };

  const savePassword = event => {
    setUserPassword(event.target.value);
    isUserInfoValid(userId, event.target.value);
  };

  const isUserInfoValid = (id, password) => {
    id.includes('@') && password.length >= 5
      ? setDisabled(false)
      : setDisabled(true);
  };

  console.log(disabled);

  return (
    <main className="login">
      <article>
        <div className="top-container">
          <p className="logo">Westagram</p>
          <div id="userInput">
            <input
              type="text"
              id="userId"
              value={userId}
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={e => saveUserId(e)}
            />
            <input
              type="password"
              id="password"
              value={userPassword}
              placeholder="비밀번호"
              onChange={e => savePassword(e)}
            />
          </div>
          <button id="loginBtn" onClick={goToMain} disabled={disabled}>
            로그인
          </button>
        </div>
        <a className="forgot-password" href="#">
          비밀번호를 잊으셨나요?
        </a>
      </article>
    </main>
  );
};

export default LoginJahyun;
