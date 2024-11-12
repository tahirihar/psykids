import React, { useEffect, useState } from 'react';
import styles from '../../asserts/sectionTwo.module.css';

const SectionTwo = ({ itemsList }) => {
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
          {itemsList.map((el) => (
            <li className={styles.item} key={el.key}>
              <a  href={el.href}>
                <div>
                  <img className={styles.image} src={el.value} />
                </div>
                <strong className={styles.posterTitle}>
                  {el.title}
                </strong>
                {/* <div className={styles.posterDiscription}>
                  <img className={styles.posterBg} src={el.value} />.
                  <p className={styles.paragraph}>{el.discription}</p>
                  <span className={styles.span}>
                    смотреть
                    {el.icon && React.createElement(el.icon)}
                  </span>
                </div> */}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SectionTwo;
