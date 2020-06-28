import React from 'react';
import style from './offline.module.css';

const Offline = () => {

  return (
    <div className={style.container}>
      <div className={style.text}>
        No internet  ☹️
      </div>
      <button className={style.button}>
        RETRY
      </button>
    </div>
  );
};

export default Offline;
