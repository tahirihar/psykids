import React from 'react';
import styles from '../asserts/searchPage.module.css';
const SearchPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.searchBlock}>
        <h2 className={styles.title}>
          <span className={styles.line} />
          Поиск по сайту
          <span className={styles.line} />
        </h2>
      </div>
      <div className={styles.searchTable}>
        <form action="/search" method="GET">
          <input
            className={styles.input}
            type="text"
            id="search-input"
           
          />
          <button className={styles.button} type="submit">
            Начать поиск
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchPage;
