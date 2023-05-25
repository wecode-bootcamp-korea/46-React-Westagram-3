import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

function LoginJiyul() {
  const navigate = useNavigate();

  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');

  const isValid = userId.includes('@') && userPw.length >= 5;

  const saveUserId = e => {
    setUserId(e.target.value);
  };

  const saveUserPw = e => {
    setUserPw(e.target.value);
  };

  const handleButton = e => {
    fetch('http://10.58.52.71:3000/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: userId,
        password: userPw,
      }),
    })
      .then(res => {
        if (res.status !== 500) {
          return res.json();
        }
        throw new Error('통신 실패!');
      })
      .then(data => {
        if (data.message === 'INVALID_USER') {
          alert('로그인 실패!');
        } else {
          alert('로그인 성공!');
          localStorage.setItem('TOKEN', data.token);
          navigate('/main-jiyul');
        }
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="login">
      <p className="title">westagram</p>
      <input
        className="id-input"
        type="text"
        name="email"
        placeholder="전화번호, 사용자 이름 또는 이메일"
        onChange={saveUserId}
      />
      <input
        className="pw-input"
        type="password"
        placeholder="비밀번호"
        name="password"
        onChange={saveUserPw}
      />
      <button
        className={`login-btn ${!isValid && 'disabled'}`}
        onClick={handleButton}
      >
        로그인
      </button>
      <a className="ask" href="/">
        비밀번호를 잊으셨나요?
      </a>
    </div>
  );
}

export default LoginJiyul;
