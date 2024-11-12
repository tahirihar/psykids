import React from 'react';
import styles from '../../asserts/footer.module.css';

function FooterList({ items, start, end }) {
  return (
    <ul className={styles.list}>
      {items.map((el) => (
        <React.Fragment key={el.key}>
          {Object.entries(el.title)
            .slice(start, end)
            .map(([key, value]) => (
              <li className={styles.item} key={key}>
                <a className={styles.a} href={el.href}>{value}</a>
              </li>
            ))}
        </React.Fragment>
      ))}
    </ul>
  );
}
export default FooterList;
