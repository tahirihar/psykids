import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

import styles from '../../asserts/poster.module.css';

const PosterDescription = ({
  value,
  discription,
  icon,
  city,
  age,
  director,
}) => {
  return (
    <div className={styles.posterDiscription}>
      <img className={styles.posterBg} src={value} />
      <ul className={styles.info}>
        <li>
          <FaArrowRight /> {age}
        </li>
        <li>
          <FaArrowRight /> {city}
        </li>
        <li>
          <FaArrowRight /> {director}
        </li>
      </ul>
      <p className={styles.paragraph}>{discription}</p>
      <div className={styles.toWatch}>
        <span>
          смотреть
          <span className={styles.icon}>
            {icon && React.createElement(icon)}
          </span>
        </span>
      </div>
    </div>
  );
};

export default PosterDescription;
