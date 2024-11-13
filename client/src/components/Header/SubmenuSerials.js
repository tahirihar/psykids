import React, { useEffect, useState } from 'react';

import styles from '../../asserts/subMenu.module.css';
const SubmenuSerials = ({ subMenuSerialsItems }) => {
  const [isMobile, setisMobile] = useState(window.innerWidth <= 1220);

  useEffect(() => {
    const handleResize = () => setisMobile(window.innerWidth <= 1220);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    !isMobile && (
      <ul
        className={`${styles.list} ${styles.hidden}`}
        style={{ backgroundColor: 'white', color: 'black' }}>
        {subMenuSerialsItems.map((el) => (
          <li className={styles.item} key={el.key}>
            <a className={styles.a} href={el.href}>
              {el.title}
            </a>
          </li>
        ))}
      </ul>
    )
  );
};

export default SubmenuSerials;
