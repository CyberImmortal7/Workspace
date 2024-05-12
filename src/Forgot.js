import React, { useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';




const Forgot= () => {
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(phoneNumber);
      };
  return (
    <div className="forgot-password-container">
        
        <div className="image-placeholder">
      </div>
     
     
     
      <div className='forgotform'>
      <h2>Forgot Password?</h2>

      <p><b>Fill in the number of your account</b></p>
      <br/>
      <input
          type="tel"
          placeholder="Phone number"
          required
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
        />      
        <br/>
      <br/>
        <button className="signup-btn" type="submit" onClick={handleSubmit}>
        
        <Link to="/ForgotTwo" >Send Code</Link>

          </button>
        </div>
        
        
        <a href="./login" className="logo">
      <img src="saveme.png" alt="home" />    </a>
    
    </div>
  );
};

export default Forgot;