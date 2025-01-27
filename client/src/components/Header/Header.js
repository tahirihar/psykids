import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TbLogin2 } from 'react-icons/tb';
import { IoIosSearch } from 'react-icons/io';
import Menu from './Menu';
import styles from '../../asserts/header.module.css';
import ModalWindow from './ModalWindow/ModalWindow';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [loginClick, setLoginClick] = useState(false);

  const toggleModal = () => {
    setLoginClick(!loginClick);
  };
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* кнопка бургер меню */}
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
          <Link to="/" className={styles.a}>
            PHYSKIDS
          </Link>
        </div>
        <Menu active={menuActive} setActive={setMenuActive} />
        <span
          className={styles.login}
          onClick={() => setLoginClick(!loginClick)}>
          <i>
            <TbLogin2 />
          </i>
          <span className={styles.avto}>Авторизация</span>
        </span>
        <Link to="search">
          <i className={`${styles.icon} ${styles.search}`}>
            <IoIosSearch />
          </i>
        </Link>
        {loginClick && (
          <div
            className={`${styles.backModal} ${
              loginClick ? styles.show : ''
            }`}>
            <ModalWindow closeModal={toggleModal} />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
