import React from 'react';
import './Login.css';

import { Link } from 'react-router-dom';

const Login = () => {
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="login-container">
      <div className="image-placeholder" />
      <div className="login-form">
        <h1>Hello,</h1>
        <h2>Welcome Back</h2>
        <form>
          <label>
            <input
              type={showPassword? 'text' : 'password'}
              placeholder="Enter phone number"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
          </label>
          <br />
          <label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={handlePasswordChange}
            />
          </label>
          <br />
          <button className="login-btn">Log In</button>
          <p>
             <Link to="/Forgot" className="login-link"> Forgot password?</Link>
          </p>
          <p>
            Don't have an account? Click <Link to="/signup" className="login-link">Here</Link>
          </p>
        </form>
      </div>
      <a href="./login" className="logo">
      <img src="saveme.png" alt="home" />    </a>
    </div>
    
  );
};

export default Login;