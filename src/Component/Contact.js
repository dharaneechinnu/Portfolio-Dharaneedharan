import React, { useState } from 'react';
import contact from '../Img/contact.jpg';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import Api from '../Api/Api';
import './contact.css'
const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const toastOption = {
    position: 'bottom-right',
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: 'dark'
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    try {
      const mail = { name, email, message };
      setName('');
      setEmail('');
      setMessage('');
      const response = await Api.post('/mail', mail);
      if (response.status === 200) {
        toast.success(response.data.message, toastOption);
      } else if (response.status === 500) {
        toast.error(response.data.message, toastOption);
      }
    } catch (error) {
      toast.error(error.message, toastOption);
    }
  };

  return (
    <div className='con_full' id='contact'>
      <div className="mask">
        <img src={contact} className='into-img' alt=''/>
      </div>
      <div className="contact_full">
        <h1 className='con_title'>Contact Me</h1>
        <form onSubmit={handleSendMessage}>
          <label htmlFor="name" className='none'>Full Name</label>
          <input required placeholder='Your Name' type="text" id='name' value={name} onChange={(e) => setName(e.target.value)} />
          <label htmlFor="email" className='none'>Email Address</label>
          <input required placeholder='Your Email' type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="message" className='none'>Your Message</label>
          <textarea required placeholder='Type Your Message here' value={message} onChange={(e) => setMessage(e.target.value)} name="" id="message" cols="30" rows="10"></textarea>
          <button type='submit' className='btu'>Send Message</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Contact;
