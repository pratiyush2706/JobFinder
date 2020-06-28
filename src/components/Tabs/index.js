import React, { useState, useEffect } from 'react';
import style from './tabs.module.css';
import ChatIcon from '../../assets/chat.png';
import Work from '../../assets/work.png';
import Profile from '../../assets/profile.png';
import Learn from '../../assets/learn.png';

const Tabs = () => {

  const [tabsList, setTabsList] = useState([]);

  useEffect(() => {
    const tabs = [
      {
        title: 'CHAT',
        isActive: true,
        imgSrc: ChatIcon,
      },
      {
        title: 'MY JOBS',
        isActive: false,
        imgSrc: Work,
      },
      {
        title: 'PROFILE',
        isActive: false,
        imgSrc: Profile,
      },
      {
        title: 'LEARN',
        isActive: false,
        imgSrc: Learn,
      },
    ];

    setTabsList(tabs);
  }, []);

  const handleTabChange = (index) => {
    const updatedTabList = [...tabsList];
    updatedTabList.map((tab, currentIndex) => {
      if (index === currentIndex) {
        tab.isActive = true;
      } else {
        tab.isActive = false;
      }
    });

    setTabsList(updatedTabList);
  }

  return (
    <div className={style.container}>
      {tabsList.map((tab, index) => (
        <div
          key={tab.title}
          className={style.tab}
          style={{
            backgroundColor: tab.isActive ? ' #eebb25' : '#222f3e',
            fontWeight: tab.isActive ? '600' : '400',
          }}
          onClick={() => handleTabChange(index)}
        >
          <div className={style.icon}>
            <img src={tab.imgSrc} alt='Tab' className={style.image} />
          </div>
          <div className={style.text}>
            {tab.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tabs;
