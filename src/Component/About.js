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
      content.style.transform = 'translateX(-360px) translateY(-300px)'; // Move from right to left
      content.style.transition = 'opacity 1s ease-in-out, transform 1s ease-in-out'; // Use ease-in-out timing function
    }
  }, [myElementVisible]);

  return (
    <div className='About_full' id='about'>
      <div className="mask">
        <img src={logo2} className='into-img' alt=''/>
      </div>
      <div className="Contents" ref={myRef} style={{ transform: 'translateY(-250px)',opacity:0 }}>
        <h2 className="About-Title">About Me</h2>
        <p className="About-Content">
          I'm a MERN stack developer skilled in full-stack web development with MongoDB, Express.js, React, and Node.js. I specialize in creating scalable applications, focusing on clean code and seamless integration of front-end and back-end components. My expertise extends to RESTful API development and real-time applications. From concept to deployment, I contribute to the entire development lifecycle, staying current with the latest trends in the MERN stack ecosystem.
        </p>
      </div>
    </div>
  );
};

export default About;