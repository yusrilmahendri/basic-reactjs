import './App.css';
import MyButton from './components/MyButton';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import React, { useState } from "react";
import NavigationBar from './components/NavigasiBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import NotFound from './Pages/Noutfound';

function App() {
  const [getNavbarValue, setNabvarValue] = useState("");

  const changeNavbarValue = () => {
    setNabvarValue("mY cONTANT");
  }

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>

        <header className='App-header'>
          <Home />
          <Navbar />
          <MyButton />
          <Footer />
          <NavigationBar navValue={getNavbarValue} />
          <button onClick={() => changeNavbarValue()}>Ubah Navigasi</button>
        </header>
      </Router>
    </div>
  );
}

export default App;
