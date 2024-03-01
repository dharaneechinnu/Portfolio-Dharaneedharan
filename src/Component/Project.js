import React from 'react';
import pro from '../Img/edu.jpg';
import project from '../Img/Project1.png';
import { FaGithub } from "react-icons/fa6";

const Project = () => {
  return (
    <div className="project_full" id='project'>
      
      <div className="mask">
        <img src={pro} className='into-img' alt=''/>
      </div>
      
      <div className="project_title_container">
        <h1 className="project_title">Project</h1>
        <div className="project_content">
          <h1 className="project_titles">Pizza App</h1>
          <div className="project-info-container">
            <img src={project} alt="" className='project' />
            <p className="project-description">
            This Pizza App, built with the MERN Stack, features CRUD operations, seamless payment integration, robust email verification, password recovery functionality, and secure JWT token authentication. It offers a comprehensive solution for managing pizza orders and ensuring a smooth user experience from order placement to delivery.      </p>
          </div>
          <a href="https://github.com/dharaneechinnu/" content=' '>
            <FaGithub size={20} className='github' style={{color:"white" ,marginRight:"2rem"}}/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
