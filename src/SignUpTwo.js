import React from 'react';
import './SignUp.css';

const SignUpTwo = () => {
  return (
    <div className="signup-container">

      <div className="image-placeholder">
      </div>

      <div className='signupform'>
      <h1>Sign Up</h1>
      <p>Create a new account</p>
      <form>
        <input type="number" name="age" 
        placeholder="Enter your age" required/>
        <br />
        <input type="email" name="email" 
        placeholder="Enter your email address" required/>
        <br />
        <label htmlFor="gender">Gender:</label>
        
        <select name="gender" id="gender" required>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <br />

        <br/>
        <button className="signup-btn">Sign Up</button>

        <br/>
        <br/>
        <footer>
          <p>
          Already have an account?<a href="/login" className="login-link">Log In</a>
        </p>
        </footer>
      </form>
    </div>
    <a href="./login" className="logo">
      <img src="saveme.png" alt="home" />    </a>
    </div>
  );
};

export default SignUpTwo;