import React, { useState } from 'react';
import './message.scss';

function Message() {
  const [showMessage, setShowMessage] = useState(true);

  const hideMessage = () => {
    setShowMessage(false);
  };

  return (
    <section className={`message ${!showMessage ? 'hide' : ''}`}>
      <div className="message__left">
        <p>Speak out. Be heard.
          <span>Be counted</span>
        </p>
      </div>
      <div className="message__right">
        <p>
          Rule of thumb is a crowd courced court of public opinion where anyone and everyone can speak 
          out and speak freely. It's easy: You share your opinion, we analyze and put the data in public report.
        </p>
      </div>
      <span className="message__arrow" onClick={hideMessage}>X</span>
    </section>
  );
}

export default Message;