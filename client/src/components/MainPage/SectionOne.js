import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
} from 'react';
import { IoPlayCircleOutline } from 'react-icons/io5';

import filmsOnSectionOne from '../../data/filmsOfSectionOne';
import styles from '../../asserts/sectionOne.module.css';

const SectionOne = () => {
  const [isMobile, setisMobile] = useState(window.innerWidth < 590);

  useEffect(() => {
    const handleResize = () => setisMobile(window.innerWidth < 590);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.sectionOne}>
      <h2 className={styles.title}>
        <span className={styles.line}></span>Популярные фильмы
        <span className={styles.line}></span>
      </h2>
      <div className={styles.content}>
        <ul className={styles.list}>
          {isMobile ? (
            <li className={styles.item} key={filmsOnSectionOne.key}>
              <a href={filmsOnSectionOne[0].href}>
                <span className={styles.play}>
                  <i className={styles.icon}>
                    {filmsOnSectionOne[0].icon &&
                      React.createElement(filmsOnSectionOne[0].icon)}
                  </i>
                  {filmsOnSectionOne[0].title}
                </span>
                <img
                  className={styles.image}
                  src={filmsOnSectionOne[0].value}
                  loading="lazy"
                />
              </a>
            </li>
          ) : (
            filmsOnSectionOne.map((el) => (
              <li className={styles.item} key={el.key}>
                <a href={el.href}>
                  <span className={styles.play}>
                    <i className={styles.icon}>
                      {el.icon &&
                        React.createElement(
                          filmsOnSectionOne[0].icon
                        )}
                    </i>
                    {el.title}
                  </span>
                  <img
                    className={styles.image}
                    src={el.value}
                    loading="lazy"
                  />
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
