import React from 'react'
import { FaLinkedinIn,FaGithub,FaInstagram } from "react-icons/fa6";
import './footing.css'
const Footing = () => {
  return (
    <>
    
   <div className="footer">
    <div className="footer-container">
      
          <div className="social">
          <li>
                <a href="https://www.linkedin.com/in/dharaneedharan-c-86054b24b/" content=' '>
                <FaLinkedinIn size={20} style={{color:"white" ,marginRight:"2rem"}}/>
                </a>
          </li>   
          <li>
                <a href="https://github.com/dharaneechinnu/" content=' '>
                <FaGithub size={20} style={{color:"white" ,marginRight:"2rem"}}/>
                </a>
          </li> 
          <li>
                <a href="https://www.instagram.com/___dharanee__/" content=' '>
                <FaInstagram size={20} style={{color:"white" ,marginRight:"2rem"}}/>
                </a>
          </li> 
          </div>
            <div>
            </div>
        </div>
        </div>
      
    </>
  )
}

export default Footing