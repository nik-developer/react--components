import React from 'react';
import PropTypes from 'prop-types';
import defaultImg from './default-img.jpg';

import style from './Profile.module.css';

const Profile = ({ avatar, name, tag, location, stats }) => (
  <div className={style.card}>
    <div className={style.centre}>
      <img className={style.img} src={avatar} alt="Аватар пользователя" />
      <p>{name}</p>
      <p className={style.ProfileText}>@{tag}</p>
      <p className={style.ProfileText}>{location}</p>
    </div>

    <ul className={style.Profilelist}>
      <li className={style.ProfileItem}>
        <span>Followers: </span>
        <span>{stats.followers}</span>
      </li>
      <li className={style.ProfileItem}>
        <span>Views: </span>
        <span>{stats.views}</span>
      </li>
      <li className={style.ProfileItem}>
        <span>Likes: </span>
        <span>{stats.likes}</span>
      </li>
    </ul>
  </div>
);
Profile.defaultProps = {
  avatar: defaultImg,
};
Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
export default Profile;
