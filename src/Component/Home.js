import React, { useEffect, useState } from 'react';
import home from '../Img/port1.jpg';
import './home.css';
import { useInView } from 'react-intersection-observer';
import resume from '../Img/resume1.pdf';

const Home = () => {
  const { ref: myRef, inView: myElementVisible } = useInView();
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const texts = ["MERN Stack Developer", "Web3 Developer"];

  useEffect(() => {
    if (myElementVisible) {
      const content = document.querySelector('.content');
      content.style.opacity = '1';
      content.style.transform = 'translateY(-180px) translateX(-50%)';
      content.style.transition = 'opacity 1s ease-in-out, transform 1s ease-in-out';

      const typeEffect = async () => {
        for (let i = 0; i < texts.length; i++) {
          for (let j = 0; j <= texts[i].length; j++) {
            setCurrentText(texts[i].substring(0, j));
            await new Promise(resolve => setTimeout(resolve, 150)); 
          }
          await new Promise(resolve => setTimeout(resolve, 1000)); 
        }
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setTimeout(typeEffect, 150); 
      };

      typeEffect();
    }
  }, [myElementVisible, texts.length]);

  return (
    <div className='home_full' id='home'>
      <div className="mask">
        <img src={home} className='into-img' alt=''/>
      </div>
      <div className="content-wrapper">
        <div 
          className="content"  
          style={{ opacity: 0, transform: 'translateY(-20px) translateX(-50%)' }} 
          ref={myRef}
        >
          <div className="typing">
            <p>Hey, I'M Dharaneedharan</p>
            <h2 className='typing'>{currentText}</h2>
          </div>
          <div className="btns">
            <a href="#contact" className='btn btn-light'>Contact Me</a>
            <a href={resume} download="Dharaneedharan-Resume" className="Download-btn">
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
