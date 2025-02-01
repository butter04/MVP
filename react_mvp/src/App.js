import React from 'react';
import './App.css';
import Select from './components/select.js';
// import Home from './components/home.js';
import Ong from './components/ong.js';
import Donate from './components/donate.js';
import DonationDashboard from './components/dashboard.js';
import VerificationResult from './components/bankcheck.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login  from './components/login.js';
import Register from './components/register.js';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="/" element={<Select />} />
          <Route path="/ong" element={<Ong />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/donateDashboard" element={<DonationDashboard />} />
          <Route path="/checkBank" element={<VerificationResult />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
      {/* <Select /> */}
    </div>
  );
}

export default App;
