import React, { useState } from 'react'
import './nav.css'
const Nav = () => {
  const [color,setcolor] = useState(false);
  const changeColor =() => {
    if(window.scrollY >=50){
      setcolor(true);
    }
    else{
      setcolor(false)
    }
  };
  window.addEventListener("scroll",changeColor);
  return (
   <div className={color ? "header header-bg": "header"}>
   
    <ul className="nav-menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#project">Project</a></li>
        <li><a href="#skill">Skill</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
  
   </div>
  )
}

export default Nav