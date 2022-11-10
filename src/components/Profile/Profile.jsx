import React from 'react';
import s from './Profile.module.css';

export default function Profile(props) {
  const { username, tag, location, avatar, stats } = props;
  console.log({ username, tag, location, avatar, stats });
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt="User avatar" className={s.avatar} />
        <p className={s.name}>Petra Marica</p>
        <p className={s.tag}>@pmarica</p>
        <p className={s.location}>Salvador, Brasil</p>
      </div>

      <ul className={s.stats}>
        <li>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>1000</span>
        </li>
        <li>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>2000</span>
        </li>
        <li>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>3000</span>
        </li>
      </ul>
    </div>
  );
}
