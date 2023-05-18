import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const LoginJahyun = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');

  let idTrue = true;
  const goToMain = () => {
    if (idTrue) {
      navigate('/main-jahyun');
    } else {
      navigate('/login-jahyun');
    }
  };

  const saveUserId = event => {
    setUserId(event.target.value);
  };

  const savePassword = event => {
    setUserPassword(event.target.value);
  };

  return (
    <main className="login">
      <article>
        <div className="topContainer">
          <p className="logo">Westagram</p>
          <div id="userInput">
            <input
              type="text"
              id="userId"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              value={userId}
              onChange={saveUserId}
            />
            <input
              type="password"
              id="password"
              placeholder="비밀번호"
              value={userPassword}
              onChange={savePassword}
            />
          </div>
          <button id="loginBtn" onClick={goToMain}>
            로그인
          </button>
        </div>
        <a className="forgotPassword" href="#">
          비밀번호를 잊으셨나요?
        </a>
      </article>
    </main>
  );
};

export default LoginJahyun;
