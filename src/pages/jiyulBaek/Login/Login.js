import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.scss';

function LoginJiyul() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');

  const saveUserId = e => {
    setUserId(e.target.value);
  };

  const saveUserPw = e => {
    setUserPw(e.target.value);
  };

  return (
    <div className="login">
      <p className="title">westagram</p>
      <input
        className="id-input"
        type="text"
        placeholder="전화번호, 사용자 이름 또는 이메일"
        onChange={saveUserId}
      />
      <input type="password" placeholder="비밀번호" onChange={saveUserPw} />
      <Link to="/main">
        <button
          onClick={() => {
            navigate('/main-jiyul');
          }}
        >
          로그인
        </button>
      </Link>
      <a className="ask" href="/">
        비밀번호를 잊으셨나요?
      </a>
    </div>
  );
}

export default LoginJiyul;
