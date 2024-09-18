import React, { useState } from 'react';
import 'react-phone-input-2/lib/style.css';
import './WhyChooseUs.css';
import PhoneInput from 'react-phone-input-2';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const WhyChooseUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });

  const { ref: leftRef, inView: leftInView } = useInView({ triggerOnce: true });
  const { ref: rightRef, inView: rightInView } = useInView({ triggerOnce: true });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhoneChange = (phone) => {
    setFormData({ ...formData, phone });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.status === 'success') {
        alert('Email sent successfully!');
      } else {
        alert(`Error sending email: ${result.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending email.');
    }
  };

  return (
    <div className="why-choose-us">
      <motion.div
        className="left-side"
        ref={leftRef}
        variants={fadeInUp}
        initial="hidden"
        animate={leftInView ? "visible" : "hidden"}
        transition={{ duration: 0.8 }}
      >
        <h1>Why Choose Us</h1>
        <h2>The Top Web Design & Development Team</h2>
        <div className="features">
          <div className="feature1">
            <p>Dynamic Websites with attractive web designs</p>
          </div>
          <div className="feature2">
            <p>Projects will deliver on time with proper analysis</p>
          </div>
          <div className="feature3">
            <p>24x7 Customer call support</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="right-side"
        ref={rightRef}
        variants={fadeInUp}
        initial="hidden"
        animate={rightInView ? "visible" : "hidden"}
        transition={{ duration: 0.8 }}
      >
        <h2>Get In Touch</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <PhoneInput
            country={'in'}
            value={formData.phone}
            onChange={handlePhoneChange}
            inputStyle={{
              width: '100%',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              padding: '10px',
              marginBottom: '10px',
              textAlign: 'justify',
            }}
            buttonStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <select
            name="service"
            value={formData.service}
            onChange={handleInputChange}
          >
            <option>Select Service</option>
            <option>Web Development</option>
            <option>UX/UI Design</option>
            <option>Branding</option>
            <option>Social Media Marketing</option>
          </select>
          <div className="msg">
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="terms">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">I agree to the terms and conditions</label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </motion.div>
    </div>
  );
};

export default WhyChooseUs;
