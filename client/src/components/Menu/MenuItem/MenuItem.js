/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import './MenuItem.css';

function MenuItem({
  id,
  onClick,
  isSelected,
  children
}) {
  const classes = ['menu-item'];
  console.log(isSelected);
  if (isSelected) {
    classes.push('menu-item-selected');
  }
  return (
    <li className={classes.join(' ')}>
      <a href="#" onClick={() => onClick(id)}>{ children}</a>

    </li>

  );
}

export default MenuItem;
