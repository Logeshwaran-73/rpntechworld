import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import './AboutUs.css';
import aboutImage from './icons/About.png';
import Vector1 from './icons/Vector1.png';

const AboutUs = () => {
  const navigate = useNavigate();
  const { ref: leftSideRef, inView: leftSideInView } = useInView({ triggerOnce: true });
  const { ref: rightSideRef, inView: rightSideInView } = useInView({ triggerOnce: true });

  const handleViewMoreClick = () => {
    navigate('/career');
  };

  return (
    <div className="about-us">
      <div
        className={`left-sid ${leftSideInView ? 'fade-in-up' : ''}`}
        ref={leftSideRef}
      >
        <h1>About Us</h1>
        <h2>At Developing IT Company, we are dedicated to crafting user-centric and client-friendly solutions.</h2>
        <p>
          Our emphasis on seamless conversion experiences ensures that our products and services meet the highest standards of usability and satisfaction. 
          Driven by a commitment to excellence, we continuously innovate and enhance our offerings to better serve our clients.
        </p>
        <button className="view-more" onClick={handleViewMoreClick}>View more &#8594;</button>
      </div>
      <div
        className={`right-sid ${rightSideInView ? 'fade-in-up' : ''}`}
        ref={rightSideRef}
      >
        <img src={aboutImage} alt="About Us" className="about-img" />
        <img src={Vector1} alt="Vector" className="vector-img" />
      </div>
    </div>
  );
};

export default AboutUs;
