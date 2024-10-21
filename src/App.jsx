import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'

import Nav from './component/nav/Nav'
import Home from './component/home/Home';
import About from './component/about/About';
import Service from './component/partner/Partner';
import Pricing from './component/careers/Careers';
import Help from './component/help/Help';
import Login from './component/login/Login';
import Register from './component/register/Register';
import Careers from './component/careers/Careers';
import Partner from './component/partner/Partner';

function App() {
  return (
    <>
    
  <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/partners" element={<Partner/>} />
        <Route path="/careers" element={<Careers/>} />
        <Route path="/help" element={<Help />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </Router>

    </>
  )
}

export default App
