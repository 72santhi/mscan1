import React, { useEffect } from 'react';

function TranslateComponent() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "http://translate.google.com/translate_a/element.js?cb=loadGoogleTranslate";
        script.async = true;
        document.body.appendChild(script);

        window.loadGoogleTranslate = () => {
            new window.google.translate.TranslateElement({ pageLanguage: 'hindi' }, 'google_translate_element');
        };

        return () => {
            document.body.removeChild(script);
            delete window.loadGoogleTranslate;
        }
    }, []);

    return (
        <div>
            <header>
                {/* Your header content goes here */}
            </header>
            <div style={{ marginTop: '50px' }}>
                <h1>Hello guys, welcome to my channel</h1>
                <div id="google_translate_element"></div>
            </div>
        </div>
    );
}

export default TranslateComponent;
