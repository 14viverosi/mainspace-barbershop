import React from 'react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer section-padding">
            <div className="footer-container container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3>The Mane Space</h3>
                        <p>Your Look. Your Space.</p>
                    </div>
                    <div className="footer-socials">
                        <a href="#" className="social-link">Instagram</a>
                        <a href="#" className="social-link">Facebook</a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {currentYear} The Mane Space. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
