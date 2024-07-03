import React, { useEffect } from 'react';
import logo2 from '../Img/about.jpg';
import './about.css';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref: myRef, inView: myElementVisible } = useInView();

  useEffect(() => {
    if (myElementVisible) {
      // Apply your animation here
      const content = document.querySelector('.Contents');
      content.style.opacity = '1';
      content.style.transform = 'translateX(-50%) translateY(-200px)'; // Reset to original position
      content.style.transition = 'opacity 2s ease-in-out, transform 2s ease-in-out'; // Use ease-in-out timing function
    }
  }, [myElementVisible]);

  return (
    <div className='About_full' id='about'>
      <div className="mask">
        <img src={logo2} className='into-img' alt=''/>
      </div>
      <div className="Contents" ref={myRef} style={{transform: 'translateY(-20px) translateX(-50%)', opacity: 0 }}>
        <h2 className="About-Title">About Me</h2>
        <p className="About-Content">
        
        I'm a MERN stack and Web3 developer skilled in full-stack web development with MongoDB, Express.js, React, Node.js, and blockchain technologies. I specialize in creating scalable and secure applications, focusing on clean code and seamless integration of front-end and back-end components. My expertise extends to RESTful API development, real-time applications, and decentralized applications (dApps). From concept to deployment, I contribute to the entire development lifecycle, staying current with the latest trends in both the MERN stack and Web3 ecosystems.
        </p>
      </div>
    </div>
  );
};

export default About;
