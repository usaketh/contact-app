import React from 'react';
import { useLocation } from 'react-router-dom';
import user from '../images/user.jpg';

const ContactDetail = (props) => {
  console.log(props);
  const location = useLocation();
  const { contact } = location.state || {};
  const { name, email } = contact || {};

  console.log(name, email);

  return (
    <div className='main'>
        <div className='ui card centered'>
           <div className='image'>
             <img src={user} alt='user'/>
           </div>
           <div className='content'>
             <div className='header'>{name}</div>
             <div className='description'>{email}</div>
           </div>
        </div>
    </div>    
  )
}

export default ContactDetail;
