import React from 'react';
import home from '../Img/port1.jpg';
import './home.css';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className='home_full' id='home'>
      <div className="mask">
        <img src={home} className='into-img' alt=''/>
      </div>
      <div className="content-wrapper">
        <motion.div 
          className="content"  
          initial={{ opacity: 0, y: -20,x:-300 }} 
          animate={{ opacity: 1, y: -120,x:-300 }}
          transition={{ duration: 2 }}
        >
          <div className="typing">
            <p>Hey, I'M Dharaneedharan</p>
            <h2>Junior Mern Stack<br/> Developer</h2>
          </div>
          <div className="btns">
            <a href="#contact" className='btn btn-light'>Contact Me</a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
