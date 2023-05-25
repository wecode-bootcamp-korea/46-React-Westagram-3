import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const LoginJahyun = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);

  const goToMain = () => {
    navigate('/main-jahyun');
  };

  const saveUserId = e => {
    setUserId(e.target.value);
    isUserInfoValid(e.target.value, password);
  };

  const savePassword = e => {
    setPassword(e.target.value);
    isUserInfoValid(userId, e.target.value);
  };

  const isUserInfoValid = (id, password) => {
    id.includes('@') && password.length >= 5
      ? setDisabled(false)
      : setDisabled(true);
  };

  const handleButton = () => {
    fetch('http://10.58.52.149:8000/auth/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        email: userId,
        password,
      }),
    })
      .then(response => {
        if (response.ok) {
          alert('로그인 성공');
          goToMain();
        } else {
          throw new Error('통신 실패...');
        }
        return response.json();
      })
      .then(result => console.log(result));
  };

  return (
    <main className="login">
      <article className="loginBox">
        <div className="top-container">
          <p className="logo">Westagram</p>
          <div className="userInput">
            <input
              type="text"
              className="userId"
              value={userId}
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={e => saveUserId(e)}
            />
            <input
              type="password"
              className="password"
              value={password}
              placeholder="비밀번호"
              onChange={e => savePassword(e)}
            />
          </div>
          <button
            className="loginBtn"
            onClick={handleButton}
            disabled={disabled}
          >
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
