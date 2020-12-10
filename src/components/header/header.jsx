import React from 'react';
import styles from './header.module.css';

// 로그인 상태라면 로그아웃을 할 수 있는 콜백함수 onLogout을 받아와서 Logout 버튼 보여주기
const Header = ({ onLogout }) => (
  <header className={styles.header}>
    {onLogout && (
      <>
        <button className={styles.logout} onClick={onLogout}>
          Logout
        </button>
      </>
    )}
    <img className={styles.logo} src="/images/logo.png" alt="logo" />
    <h1 className={styles.title}>Business Card Maker</h1>
  </header>
);

export default Header;
