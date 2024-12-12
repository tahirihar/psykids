import React, { useState } from 'react';
import { TbLogin2 } from 'react-icons/tb';
import { IoIosSearch } from 'react-icons/io';
import Menu from './Menu';
import styles from '../../asserts/header.module.css';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div
          className={
            menuActive === true
              ? `${styles.burgerBtn} ${styles.close}`
              : styles.burgerBtn
          }
          onClick={() => setMenuActive(!menuActive)}>
          <span className={styles.span}></span>
        </div>
        <div className={styles.logo}>
          <a className={styles.a} href="/">
            PHYSKIDS
          </a>
        </div>
        <Menu active={menuActive} setActive={setMenuActive} />
        <span className={styles.login}>
          <i className={styles.icon}>
            <TbLogin2 />
          </i>
          <span className={styles.avto}>Авторизация</span>
        </span>
        <i className={styles.icon}>
          <IoIosSearch />
        </i>
      </div>
    </header>
  );
};

export default Header;



