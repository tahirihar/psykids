import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from '../../asserts/menu.module.css';
import SubmenuFilms from './SubmenuFilms';
import SubmenuSerials from './SubmenuSerials';
import SubmenuCartoons from './SubmenuCartoons';

const Menu = ({ active, setActive }) => {
  const subMenuFilmsItems = [
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

  const subMenuSerialsItems = [
    {
      href: '/',
      key: uuidv4(),
      title: 'все',
    },
    {
      href: '/',
      key: uuidv4(),
      title: 'вестерн',
    },
    {
      href: '/',
      key: uuidv4(),
      title: 'фэнтази',
    },
    {
      href: '/',
      key: uuidv4(),
      title: 'комедия',
    },
    {
      href: '/',
      key: uuidv4(),
      title: 'детектив',
    },
    {
      href: '/',
      key: uuidv4(),
      title: 'криминал',
    },
  ];

  const subMenuCartoonsItems = [
    {
      href: '/',
      key: uuidv4(),
      title: 'все',
    },
    {
      href: '/',
      key: uuidv4(),
      title: 'мелодрама',
    },
    {
      href: '/',
      key: uuidv4(),
      title: 'фантастика',
    },
    {
      href: '/',
      key: uuidv4(),
      title: 'криминал',
    },
    {
      href: '/',
      key: uuidv4(),
      title: 'военный',
    },
    {
      href: '/',
      key: uuidv4(),
      title: 'история',
    },
  ];
  const [isFilmsSubmenuVisible, setIsFilmsSubmenuVisible] =
    useState(false);
  const [isSerialsSubmenuVisible, setIsSerialsSubmenuVisible] =
    useState(false);
  const [isCartoonsSubmenuVisible, setIsCartoonsSubmenuVisible] =
    useState(false);

  return (
    <nav
      className={
        active ? `${styles.nav} ${styles.active}` : styles.nav
      }>
      <ul className={styles.list}>
        <li
          onMouseEnter={() => setIsFilmsSubmenuVisible(true)}
          onMouseLeave={() => setIsFilmsSubmenuVisible(false)}>
          <a href="/film">ФИЛЬМЫ</a>
          {isFilmsSubmenuVisible ? (
            <SubmenuFilms subMenuFilmsItems={subMenuFilmsItems} />
          ) : null}
        </li>
        <li
          onMouseEnter={() => setIsSerialsSubmenuVisible(true)}
          onMouseLeave={() => setIsSerialsSubmenuVisible(false)}>
          <a href="/serial">СЕРИАЛЫ</a>
          {isSerialsSubmenuVisible ? (
            <SubmenuSerials
              subMenuSerialsItems={subMenuSerialsItems}
            />
          ) : null}
        </li>
        <li
          onMouseEnter={() => setIsCartoonsSubmenuVisible(true)}
          onMouseLeave={() => setIsCartoonsSubmenuVisible(false)}>
          <a href="/multfilm">МУЛЬТФИЛЬМЫ</a>
          {isCartoonsSubmenuVisible ? (
            <SubmenuCartoons
              subMenuCartoonsItems={subMenuCartoonsItems}
            />
          ) : null}
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
