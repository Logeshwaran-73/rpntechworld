import React from 'react';
import { useInView } from 'react-intersection-observer';
import './ChatBox.css';

const ChatBot = ({ onClose }) => {
  const { ref: chatRef, inView: chatInView } = useInView({ triggerOnce: true });

  return (
    <div className={`chatbox-overlay ${chatInView ? 'fade-in-up' : ''}`} ref={chatRef}>
      <div className="chat-container">
        <div className="chat-header">
          <button className="close-button" onClick={onClose}></button>
          <h1>HelpDesk <span className="chat-icon">💬</span></h1>
        </div>
        <div className="chat-body">
          <div className="chat-message bot">
            <div className="message-text">Hi User, It's RPN. Feel free to use our service</div>
          </div>
          <div className="chat-message user">
            <div className="message-text">I want Web Development service..</div>
          </div>
          <div className="chat-message bot">
            <div className="message-text">Hi User, It's RPN. Feel free to use our service</div>
          </div>
          <div className="chat-message user">
            <div className="message-text">I want Web Development service..</div>
          </div>
        </div>
        <div className="chat-input">
          <input type="text" placeholder="Type Here..." />
          <button className="send-button">➤</button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
