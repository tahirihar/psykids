import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
          <Link to="films">ФИЛЬМЫ</Link>
          {isFilmsSubmenuVisible ? (
            <SubmenuFilms subMenuFilmsItems={subMenuFilmsItems} />
          ) : null}
        </li>
        <li
          onMouseEnter={() => setIsSerialsSubmenuVisible(true)}
          onMouseLeave={() => setIsSerialsSubmenuVisible(false)}>
          <Link to="serial">СЕРИАЛЫ</Link>
          {isSerialsSubmenuVisible ? (
            <SubmenuSerials
              subMenuSerialsItems={subMenuSerialsItems}
            />
          ) : null}
        </li>
        <li
          onMouseEnter={() => setIsCartoonsSubmenuVisible(true)}
          onMouseLeave={() => setIsCartoonsSubmenuVisible(false)}>
          <Link to="multfilm">МУЛЬТФИЛЬМЫ</Link>
          {isCartoonsSubmenuVisible ? (
            <SubmenuCartoons
              subMenuCartoonsItems={subMenuCartoonsItems}
            />
          ) : null}
        </li>
        <li>
          <Link to="anime">АНИМЕ</Link>
        </li>
        <li>
          <Link to="newdeaf">НОВИНКИ</Link>
        </li>
        <li>
          <Link to="deafrelease">МЫ В TELEGRAM</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
