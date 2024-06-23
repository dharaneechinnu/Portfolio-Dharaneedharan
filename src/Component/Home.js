import React, { useEffect } from 'react';
import home from '../Img/port1.jpg';
import './home.css';
import { useInView } from 'react-intersection-observer';
import resume from '../Img/resume1.pdf'
const Home = () => {
  const { ref: myRef, inView: myElementVisible } = useInView();

  useEffect(() => {
    if (myElementVisible) {
      // Apply your animation here
      const content = document.querySelector('.content');
      content.style.opacity = '1';
      content.style.transform = 'translateY(-180px) translateX(-50%)'; // Reset to original position
      content.style.transition = 'opacity 2s ease-in-out, transform 2s ease-in-out'; // Use ease-in-out timing function
    }
  }, [myElementVisible]);

  return (
    <div className='home_full' id='home'>
      <div className="mask">
        <img src={home} className='into-img' alt=''/>
      </div>
      <div className="content-wrapper">
        <div 
          className="content"  
          style={{ opacity: 0, transform: 'translateY(-20px) translateX(-50%)' }} // Initial style
          ref={myRef}
        >
          <div className="typing">
            <p>Hey, I'M Dharaneedharan</p>
            <h2>Junior Mern Stack<br/> Developer</h2>
          </div>
          <div className="btns">
            <a href="#contact" className='btn btn-light'>Contact Me</a>
            <a href={resume} download="Dharaneedharan-Resume" class="Download-btn">
    Resume 
   
</a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
