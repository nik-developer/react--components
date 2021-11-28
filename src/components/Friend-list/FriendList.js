import React from 'react';
import FriendListItem from './FriendListItem';

import style from '../Friend-list/Friend.module.css';

const FriendList = ({ friends }) => (
  <ul className={style.FriendList}>
    {friends.map(props => (
      <FriendListItem
        key={props.id}
        avatar={props.avatar}
        name={props.name}
        isOnline={props.isOnline}
      />
    ))}
  </ul>
);

export default FriendList;
