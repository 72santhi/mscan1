import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact'
import Search from './Components/Search';
import Feedback from './Components/Feedback';
import Account from './Components/Account';
import Navbar from "./Components/Navbar";
import PlantInfo from './Components/PlantInfo';
import Footer from "./Components/Footer";
//import Language from "./Components/Language";



function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Search" element={<Search />} />
            <Route path="/Feedback" element={<Feedback />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Account" element={<Account/>} />
            <Route path="/plant/:plantName" element = {<PlantInfo/>} />
            
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
