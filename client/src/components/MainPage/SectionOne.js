import React, { useEffect, useState } from 'react';
import { IoPlayCircleOutline } from 'react-icons/io5';
import styles from '../../asserts/sectionOne.module.css';

const SectionOne = ({ items, key }) => {
  const [isMobile, setisMobile] = useState(window.innerWidth < 590);

  useEffect(() => {
    const handleResize = () => setisMobile(window.innerWidth < 590);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className={styles.sectionOne}>
      <h2 className={styles.title} >
        <span className={styles.line}></span>Популярные фильмы
        <span className={styles.line}></span>
      </h2>
      <div className={styles.content}>
        <ul className={styles.list}>
          {isMobile ? (
            <li
              className={styles.item}
              key={items[0].value}>
              <a href={items[0].href}>
                <span className={styles.play}>
                  <i className={styles.icon}>
                    {items[0].icon &&
                      React.createElement(items[0].icon)}
                  </i>
                  {items[0].title}
                </span>
                <img className={styles.image} src={items[0].value} />
              </a>
            </li>
          ) : (
            items.map((el) => (
              <li className={styles.item}key={el.value}>
                <a href={el.href}>
                  <span className={styles.play}>
                    <i className={styles.icon}>
                      {el.icon && React.createElement(items[0].icon)}
                    </i>
                    {el.title}
                  </span>
                  <img className={styles.image} src={el.value} />
                </a>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default SectionOne;
