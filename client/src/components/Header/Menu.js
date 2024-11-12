import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from '../../asserts/menu.module.css';
import Submenu from './Submenu';

const Menu = ({ active, setActive }) => {
  const subMenuItems = [
    {
      href: '/',
      key: uuidv4(),
      title: 'все',
    },
    {
      href: '/',
      key: uuidv4(),
      title: 'детектив',
    },
    {
      href: '/',
      key: uuidv4(),
      title: 'история',
    },
    {
      href: '/',
      key: uuidv4(),
      title: 'мюзикл',
    },
    {
      href: '/',
      key: uuidv4(),
      title: 'ужасы',
    },
    {
      href: '/',
      key: uuidv4(),
      title: 'биография',
    },
  ];
  const [isSubmenuVisible, setSubmenuVisible] = useState(false);

  const handleMouseEnter = () => {
    setSubmenuVisible(true);
  };

  const handleMouseLeave = () => {
    setSubmenuVisible(false);
  };

  return (
    <nav
      className={
        active ? `${styles.nav} ${styles.active}` : styles.nav
      }>
      <ul className={styles.list}>
        <li
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={styles.film}>
          <a href="/film">ФИЛЬМЫ</a>
          {isSubmenuVisible ? (
            <Submenu subMenuItems={subMenuItems} />
          ) : null}
        </li>
        <li>
          <a href="/serial">СЕРИАЛЫ</a>
        </li>
        <li>
          <a href="/multfilm">МУЛЬТФИЛЬМЫ</a>
        </li>
        <li>
          <a href="/anime">АНИМЕ</a>
        </li>
        <li>
          <a href="/newdeaf">НОВИНКИ</a>
        </li>
        <li>
          <a href="/deafrelease">МЫ В TELEGRAM</a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
