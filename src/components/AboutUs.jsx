import React from 'react';

const AboutUs = () => {
  return (
    <div className="about-container">
      <h2>About Smart Tax Web App</h2>
      <div className="about-content">
        <p>
          Smart Tax Web App is a comprehensive solution designed to simplify tax 
          document management for individuals and businesses. Our platform provides 
          an intuitive interface for adding, updating, and tracking tax documents 
          with ease.
        </p>
        
        <h3>Our Features</h3>
        <ul>
          <li>Easy tax document submission</li>
          <li>Real-time tax calculations</li>
          <li>Secure document storage</li>
          <li>Comprehensive reporting</li>
          <li>User-friendly interface</li>
        </ul>
        
        <h3>Contact Us</h3>
        <p>
          For any inquiries or support, please email us at: 
          <a href="mailto:support@smarttaxapp.com">support@smarttaxapp.com</a>
        </p>
      </div>
    </div>
  );
};

export default AboutUs;