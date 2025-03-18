import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Logo & Description */}
                <div className="footer-about">
                    <h2 className="footer-logo">Shopify</h2>
                    <p>Discover the latest trends in fashion, electronics, and more at the best prices!</p>
                </div>

                {/* Quick Links */}
                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/shop">Shop</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                {/* Support Section */}
                <div className="footer-support">
                    <h3>Customer Support</h3>
                    <ul>
                        <li><Link to="/faq">FAQ</Link></li>
                        <li><Link to="/shipping">Shipping & Returns</Link></li>
                        <li><Link to="/policy">Privacy Policy</Link></li>
                        <li><Link to="/terms">Terms & Conditions</Link></li>
                    </ul>
                </div>

                {/* Social Media Links */}
                <div className="footer-social">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="https://www.youtube.com/"><FaYoutube /></a>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Shopify. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
