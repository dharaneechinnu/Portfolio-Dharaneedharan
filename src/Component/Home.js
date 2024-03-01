import React from 'react'
import home from '../Img/port1.jpg'
import '../index.js'
const Home = () => {
  return (
    <div className='home_full' id='home'>
        <div className="mask">
      <img src={home} className='into-img' alt=''/>
    </div>
    <div className="content">
      <div className="typing">
      <p>Hey, I'M Dharaneedharan</p>
      <h2>Junior Mern Stack<br/> Developer </h2>
      </div>
      <div className="btns">
      <a href="#contact" className='btn btn-light'>Contact Me</a>
      </div>
     </div>
        </div>
  )
}

export default Home