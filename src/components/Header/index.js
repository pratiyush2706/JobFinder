import React from 'react';
import style from './header.module.css';

const Header = () => {

  return (
    <div className={style.container}>
      <div className={style.firstColumn}>
        <div className={style.logo}>
          <img src='https://jobs.vahan.co/icon_min.jpg' alt='logo' />
        </div>
        <div className={style.title}>
          Job Finder
        </div>
      </div>
      <div className={style.secondColumn}>
        ₹
        </div>
    </div>
  );
};

export default Header;
