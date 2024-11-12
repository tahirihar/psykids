import React from 'react';

import styles from '../../asserts/subMenu.module.css';
const Submenu = ({ subMenuItems }) => {
  return (
    <ul
      className={`${styles.list} ${styles.hidden}`}
      style={{ backgroundColor: 'white', color: 'black' }}>
      {subMenuItems.map((el) => (
        <li className={styles.item} key={el.key}>
          <a className={styles.a} href={el.href}>
            {el.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Submenu;
