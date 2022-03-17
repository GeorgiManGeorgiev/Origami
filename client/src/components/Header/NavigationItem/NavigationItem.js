/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import style from './NavigationItem.module.css';

function NavigationItem(props) {
  const { children } = props;
  return (

    <li className={style.listItem}>
      <a href="#">{children}</a>
    </li>
  );
}

export default NavigationItem;
