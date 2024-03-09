import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('en');
    console.log(selectedLanguage);

    // Function to load Google Translate script
    const loadGoogleTranslate = () => {
        const script = document.createElement('script');
        script.src = 'https://translate.google.com/translate_a/element.js?cb=loadGoogleTranslate';
        script.async = true;
        document.body.appendChild(script);
    };

    // Event handler to change selected language
    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
        loadGoogleTranslate();
    };

    return (
        <div className="main-header">
            <div className="main-header-container">
                <div className="logo-container">
                    <Link to="/" className="logo-link">
                        <img src="public/Assests/ic7.png" alt="Icon" className="logo-icon" />
                        <h6 className='title'>MediScan</h6>
                    </Link>
                </div>
                <nav className="navbar-links">
                    <Link to="/">Home</Link>
                    <Link to="/Search">Search</Link>
                    
                    <Link to="/Feedback">Feedback</Link>
                    <Link to="/Account">Account</Link>
                </nav>
                {/* Dropdown button for language selection */}
                <div className="dropdown">
                    <button className="dropbtn">Select Language</button>
                    <div className="dropdown-content">
                        <button onClick={() => handleLanguageChange('en')}>English</button>
                        <button onClick={() => handleLanguageChange('fr')}>French</button>
                        {/* Add more language buttons as needed */}
                    </div>
                </div>
            </div>
            {/* Google Translate element container */}
            <div id="google_translate_element"></div>
        </div>
    );
};

export default Navbar;
