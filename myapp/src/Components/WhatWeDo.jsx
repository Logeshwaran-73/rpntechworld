import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './WhatWeDo.css';
import apkIcon from './icons/apk-icon.png'; 
import webIcon from './icons/web-icon.png';
import uxIcon from './icons/ux-icon.png';
import brandingIcon from './icons/branding-icon.png';
import socialMediaIcon from './icons/social-media-icon.png';
import chatIcon from './icons/chat.png';
import ChatBox from './ChatBox';

const services = [
  { icon: apkIcon, title: 'APK Development', description: 'Our emphasis on seamless conversion experiences ensures that our products and services meet the highest standards of usability and satisfaction.' },
  { icon: webIcon, title: 'Web Development', description: 'Our emphasis on seamless conversion experiences ensures that our products and services meet the highest standards of usability and satisfaction.' },
  { icon: uxIcon, title: 'UX/UI Design', description: 'Our emphasis on seamless conversion experiences ensures that our products and services meet the highest standards of usability and satisfaction.' },
  { icon: brandingIcon, title: 'Branding', description: 'Our emphasis on seamless conversion experiences ensures that our products and services meet the highest standards of usability and satisfaction.' },
  { icon: socialMediaIcon, title: 'Social Media Marketing', description: 'Our emphasis on seamless conversion experiences ensures that our products and services meet the highest standards of usability and satisfaction.' },
];

const WhatWeDo = () => {
  const [showChatBox, setShowChatBox] = useState(false);
  const [visibleServices, setVisibleServices] = useState([]);
  const navigate = useNavigate();

  const toggleChatBox = () => {
    setShowChatBox(!showChatBox);
  };

  const closeChatBox = () => {
    setShowChatBox(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const newVisibleServices = services.map((_, index) => {
        const element = document.getElementById(`service-${index}`);
        if (element && scrollPosition >= element.offsetTop + element.clientHeight / 2) {
          return true;
        }
        return false;
      });
      setVisibleServices(newVisibleServices);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="what-we-do">
      <h1>What We Do</h1>
      <div className="services">
        {services.map((service, index) => (
          <div
            key={index}
            id={`service-${index}`}
            className={`service ${visibleServices[index] ? 'visible' : ''}`}
          >
            <img src={service.icon} alt={service.title} className="service-icon" />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
      {/* <button className="chat-button" onClick={toggleChatBox}>
        <img src={chatIcon} alt="Chat with us" className="chat-icon" />
      </button> */}
      {showChatBox && (
        <div className="chatbox-overlay">
          <ChatBox onClose={closeChatBox} />
        </div>
      )}
    </div>
  );
};

export default WhatWeDo;
