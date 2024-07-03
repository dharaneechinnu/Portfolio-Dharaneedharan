import React, { useRef, useEffect } from 'react';
import pro from '../Img/edu.jpg';
import './project.css';
import { useInView } from 'react-intersection-observer';

const Project = () => {
  const { ref: projectRef, inView: projectVisible } = useInView({
    triggerOnce: true, // Ensures the effect triggers only once
    threshold: 0.5, // Adjust the threshold as per your requirement
  });

  const projectContainerRef = useRef(null);

  useEffect(() => {
    if (projectVisible) {
      // Apply your animation here
      projectContainerRef.current.style.transform = 'scale(1)';
      projectContainerRef.current.style.transition = 'transform 1s ease-in-out';
    }
  }, [projectVisible]);

  return (
    <div className="project_full" id='project' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${pro})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
      <div className="work-container" ref={projectRef}>
        <h1 className="project-heading">Projects</h1><br/>
        <div className="project-container" ref={projectContainerRef} style={{ transform: 'scale(0.8)' }}>
          <div className="project-card"  >
            <h2 className="project-title">Pizza App</h2>
            <div className="project-details">
              <p>This Pizza App, built with the MERN Stack, features CRUD operations, seamless payment integration, robust email verification, password recovery functionality, and secure JWT token authentication. It offers a comprehensive solution for managing pizza orders and ensuring a smooth user experience from order placement to delivery.</p>
              <div className="project-btns">
                <a href="https://oibsip-pizza-app.onrender.com/" style={{ color: 'black', textDecoration: 'inherit'}} title='View My Project'>View</a>
                <a href="https://github.com/dharaneechinnu/OIBSIP-Frontend" style={{ color: 'black', textDecoration: 'inherit'}} title='View Source Code'>Source</a>
              </div>
            </div>
          </div>
          <div className="project-card">
            <h2 className="project-title">Job-Portal</h2>
            <div className="project-details">
              <p>
              A job portal with CRUD operations and JWT token integration allows users to create, read, update, and delete job listings while ensuring secure authentication through JWT tokens. It facilitates seamless interaction between job seekers and employers, enabling efficient management of job postings and user credentials with enhanced security measures. </p>
              <div className="project-btns">
                <a href="https://job-portal-0l2n.onrender.com" style={{ color: 'black', textDecoration: 'inherit'}} title='View My Project'>View</a>
                <a href="https://github.com/dharaneechinnu/Job-portal" style={{ color: 'black', textDecoration: 'inherit'}} title='View Source Code'>Source</a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <h2 className="project-title">HAND🤝FUND</h2>
            <div className="project-details">
              <p>
              
              This is Hand🤝Fund, a crowdfunding project leveraging blockchain technology. It uses MetaMask for transactions, along with Web3.js, Remix Solidity, and React for the frontend. Hand🤝Fund allows users to create campaigns and donate directly to campaign owners, ensuring transparent fund transactions.
               </p>
              
              <div className="project-btns">
                <a href="https://hand-fund.onrender.com/" style={{ color: 'black', textDecoration: 'inherit'}} title='View My Project'>View</a>
                <a href="https://github.com/dharaneechinnu/Hand-Fund" style={{ color: 'black', textDecoration: 'inherit'}} title='View Source Code'>Source</a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Project;
