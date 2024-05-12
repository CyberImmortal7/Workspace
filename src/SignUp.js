import React, { useState } from 'react';
import './SignUp.css';

const SignUp = () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="signup-container">

      <div className="image-placeholder">
      </div>

      <div className='signupform'>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
      <input type="text" name="Full Name" id="name" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} required/>        <input type="tel" name="phone" id="phone" placeholder="Phone number" value={phone} onChange={(e) => setPhone(e.target.value)} required/>
        <br />
        <input type="password" name="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        <br />
        <input type="password" name="confirm-password" id="confirm-password" placeholder="Confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required/>
        <br />
        {error && <p className="error">{error}</p>}

        <br/>
        <button className="signup-btn" type="submit">
          <a href='/signuptwo'>Continue</a>
          </button>

        <br/>
        <br/>
        <footer>
          <p>
          Already have an account? Click <a href="/login" className="login-link">Here</a></p>
        
        </footer>
      </form>
    </div>
    <a href="./login" className="logo">
      <img src="saveme.png" alt="home" />    </a>
    </div>
  );
};

export default SignUp;