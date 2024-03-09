import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";

const Footer = () => {

    return (
        <div className="main-footer">

            <div className = "footer-container-1">
                <footer className="footer-links">
                    <Link to="/">Home</Link>
                    <Link to="/PrivacyPolicy.js">Privacy Policy</Link>
                    <Link to="/Contact">Contact</Link>
                    <Link to="/About">About</Link>
                </footer>
            </div>

            <div className = "footer-container-2">
                MediScan.com - All rights reserved
            </div>
            
        </div> 
    );

};

export default Footer;