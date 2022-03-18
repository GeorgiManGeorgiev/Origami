/* eslint-disable max-len */
import React from 'react';
import { useState } from 'react';

import MenuItem from './MenuItem/MenuItem';
import MENU_ITEMS from './MenuConstatns';

import './Menu.css';

function Menu({
  onMenuItemClick
}) {
  const [currentItem, setCurrentItem] = useState();
  const menuItemClickHandler = (id) => {
    setCurrentItem(id);
    onMenuItemClick(id);
  };
  console.log(currentItem);
  return (
    <aside className="menu">
      {MENU_ITEMS.map((x) => (
        <MenuItem
          key={x.id}
          id={x.id}
          isSelected={x.id === currentItem}
          onClick={menuItemClickHandler}
        >
          {x.text}
        </MenuItem>
      ))}
    </aside>

  );
}

export default Menu;
