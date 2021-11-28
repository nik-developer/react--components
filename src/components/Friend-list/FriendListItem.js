import React from 'react';

import style from '../Friend-list/Friend.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={style.FriendItem}>
    <span className={isOnline ? style.statusIsOnline : style.statusIsOffline}>
      {isOnline}
    </span>
    <img src={avatar} alt="" width="48" />
    <p>{name}</p>
  </li>
);

export default FriendListItem;
