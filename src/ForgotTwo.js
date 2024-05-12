
import React from 'react';
import { useState } from 'react';
import './ForgotTwo.css'

const ForgotTwo = () => {
  const [code, setCode] = useState('');

  const handleConfirm = () => {
    // API call to verify the code and reset the password
    console.log('Code confirmed!');
  };

  return (
    
    <div className="forgot-password-container">
        <div className="image-placeholder">
      </div>
      
      
      <div className='forgotform'>
      
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Fill in the code sent to your number"
        />
        <br/>
        <br/>
      
      
        <button className="confirm-button"
         onClick={handleConfirm}>
            Confirm
         </button>
      
      
        
      </div>
    </div>
  );
};

export default ForgotTwo;