import React, { useState } from 'react';
import { IoIosCloseCircle } from 'react-icons/io';
import styles from '../../../asserts/modalWindow.module.css';

const ModalWindow = ({ closeModal }) => {
  return (
    <div className={`${styles.card} ${styles.show}`}>
      <div className={styles.title}>Авторизация</div>
      <div className={styles.content}>
        <form className={styles.form} method="post">
          <ul className={styles.login}>
            <li className={styles.element}>
              <label className={styles.label} htmlFor="name">
                Логин:{' '}
              </label>
              <a href="/">Создать</a>
              <input
                className={styles.input}
                type="text"
                name="name"
                id="name"
                placeholder="Ваш логин"></input>
            </li>
            <li className={styles.element}>
              <label className={styles.label} htmlFor="password">
                Пароль:{' '}
              </label>
              <a href="/">Забыли пароль?</a>
              <input
                className={styles.input}
                type="password"
                name="password"
                id="password"
                placeholder="Ваш пароль"
              />
            </li>
          </ul>
          <div className={styles.check}>
            <input
              type="checkbox"
              name="login_not_save"
              id="login_not_save"
              value="1"
            />
            <label
              className={styles.smnElse}
              htmlFor="login_not_save">
              Чужой компьютер
            </label>
            <button
              type="submit"
              title="Вход"
              className={styles.button}>
              Войти на сайт
            </button>
          </div>
        </form>
      </div>
      <i className={styles.icon} onClick={closeModal}>
        <IoIosCloseCircle />
      </i>
    </div>
  );
};

export default ModalWindow;
