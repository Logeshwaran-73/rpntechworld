import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Career.css';
import CareerImage from './icons/Career.png'; 

const Career = () => {
  const { ref: contentRef, inView: contentInView } = useInView({ triggerOnce: true });

  return (
    <div className="career">
      <div className="overlay">
        <div className={`content ${contentInView ? 'fade-in-up' : ''}`} ref={contentRef}>
          {/* <img src={CareerImage} alt="Career" className="ci" /> */}
          <div className="text-content">
            <h1>Career</h1>
            <h2>At Developing IT Company, we are dedicated to crafting user-centric and client-friendly solutions.</h2>
            <p>
              Our emphasis on seamless conversion experiences ensures that our products and services meet the highest standards of usability and satisfaction. 
              Driven by a commitment to excellence, we continuously innovate and enhance our offerings to better serve our clients.
            </p>
            <button className="open-positions">Open Positions &#8594;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
