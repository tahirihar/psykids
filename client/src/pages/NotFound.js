import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../asserts/notFound.module.css';
const NotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1 className={styles.title}>404. Страница не найдена</h1>
        <p className={styles.desc}>
          Возможно, она была перемещена, или вы просто неверно указали
          адрес страницы.
        </p>
        <div className={styles.links}>
          <Link to="/" className={styles.link}>
            Перейти на главную
          </Link>
          <Link to="/" className={styles.link}>
            Написать в поддержку
          </Link>
        </div>
      </div>
      <div className={styles.right}>
        <img src="/images/what.webp" alt="Что?!" loading="lazy"></img>
      </div>
    </div>
  );
};

export default NotFound;
