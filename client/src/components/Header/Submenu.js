import React from 'react';

import '../../asserts/subMenu.module.css';
const Submenu = ({ subMenuItems }) => {
  return (
    <div className="submenu">
      <ul
        className="submenu__list hidden__menu"
        style={{ backgroundColor: 'white', color: 'black' }}>
        {subMenuItems.map((el) => (
          <React.Fragment key={el.key}>
            {Object.entries(el.titles).map(([key, value]) => (
              <li className="submenu__item" key={`${el.key}-${key}`}>
                <a href={el.href}>{value}</a>
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default Submenu;
