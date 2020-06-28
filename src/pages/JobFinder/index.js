import React, { useState } from 'react';
import style from './jobFinder.module.css';
import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Background from '../../assets/whatsappBackground.png';
import SendMessageIcon from '../../assets/sendMessage.svg';
import { isEmpty } from '../../utils';

const JobFinder = () => {
  const [userMessage, setUserMessage] = useState('');
  const [messageList, setMessageList] = useState([]);

  const onMessage = () => {
    return Promise.resolve({
      data: {
        botMessage: "Pardon my ignorance. I am just a dummy."
      }
    });
  };

  const onSend = async () => {
    const response = await onMessage();
    const { botMessage } = response.data;
    const messages = [...messageList];
    messages.push({
      isSelf: true,
      message: userMessage,
    },
      {
        isSelf: false,
        message: botMessage,
      }
    );
    setUserMessage('');
    setMessageList(messages);
  };

  return (
    <div className={style.container}>
      <div className={style.header}>
        <Header />
        <Tabs />
      </div>
      <div
        className={style.content}
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: 'cover',
        }}
      >
        {messageList.map(message => (
          <div
            className={style.messageCard}
            style={{
              justifyContent: message.isSelf ? 'flex-end' : 'flex-start',
            }}
          >
            <div
              className={style.message}
              style={{
                backgroundColor: message.isSelf ? '#f9eab5' : '#f0f3f6',
              }}
            >
              {message.message}
            </div>
          </div>
        ))}
      </div>
      <div
        className={style.footer}
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: 'cover',
        }}>
        <div className={style.input}>
          <textarea
            name="message"
            value={userMessage}
            onChange={({ target }) => {
              setUserMessage(target.value);
            }}
            placeholder="Type Message"
            style={{
              height: userMessage ? 'fit-content' : '1rem',
            }}
          />
        </div>
        <button
          className={style.send}
          onClick={onSend}
          disabled={isEmpty(userMessage)}
          style={{
            backgroundImage: `url(${Background})`,
            backgroundSize: 'cover',
          }}>
          <img src={SendMessageIcon} alt="send" className={style.sendIcon} />
        </button>
      </div>
    </div>
  );
};

export default JobFinder;
