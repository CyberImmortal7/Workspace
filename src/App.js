import React from 'react';
import Login from './Login.js';
import SignUp from './SignUp.js';
import SignUpTwo from './SignUpTwo.js';
import Forgot from './Forgot.js';
import ForgotTwo from './ForgotTwo.js';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signuptwo" element={<SignUpTwo />} />
            <Route path="/forgot" element={<Forgot />} />
            <Route path="/forgottwo" element={<ForgotTwo />} />

            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;