import React, { useEffect, useState } from 'react';
import styles from '../../asserts/sectionTwo.module.css';
import PosterDescription from './PosterDescription';
import filmsOfSectionTwo from '../../data/filmsOfSectionTwo';

const SectionTwo = () => {
  // const [isHover, setIsHover] = useState(false);

  // useEffect(() => {
  //   const handleResize = () => setisMobile(window.innerWidth < 590);
  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);
  return (
    <div className={styles.sectionTwo}>
      <h2 className={styles.title}>
        <span className={styles.line}></span>Недавние фильмы и сериалы
        <span className={styles.line}></span>
      </h2>
      <div className={styles.content}>
        <ul className={styles.list}>
          {filmsOfSectionTwo.map((el) => (
            <li key={el.key}>
              <a href={el.href}>
                <div className={styles.posterInner}>
                  <img
                    className={styles.image}
                    src={el.value}
                    loading="lazy"
                  />
                </div>
                <strong className={styles.posterTitle}>
                  {el.title}
                </strong>
                {/* <PosterDescription /> */}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SectionTwo;
