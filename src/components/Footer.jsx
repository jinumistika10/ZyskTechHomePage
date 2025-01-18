import React from 'react';
import '../styles/Footer.css';
import LogoImg from '../images/logo.jpeg';

const Footer = () => {
    return (
        <footer class="footer">
            <div class="footer-trial">
                <h2>Start your free trial</h2>
                <p>Join over 4,000+ startups already growing with Untitled.</p>
                <div class="footer-buttons">
                    <button class="btn-learn-more">Learn more</button>
                    <button class="btn-get-started">Get started</button>
                </div>
            </div>
            <div class="footer-links">
                <div class="footer-column">
                    <h3>Product</h3>
                    <ul>
                        <li>Overview</li>
                        <li>Features</li>
                        <li>Solutions</li>
                        <li>Tutorials</li>
                        <li>Pricing</li>
                        <li>Releases</li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>Company</h3>
                    <ul>
                        <li>About us</li>
                        <li>Careers</li>
                        <li>Press</li>
                        <li>News</li>
                        <li>Media kit</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>Resources</h3>
                    <ul>
                        <li>Blog</li>
                        <li>Newsletter</li>
                        <li>Events</li>
                        <li>Help center</li>
                        <li>Tutorials</li>
                        <li>Support</li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>Use cases</h3>
                    <ul>
                        <li>Startups</li>
                        <li>Enterprise</li>
                        <li>Government</li>
                        <li>SaaS centre</li>
                        <li>Marketplaces</li>
                        <li>Ecommerce</li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>Social</h3>
                    <ul>
                        <li>Twitter</li>
                        <li>LinkedIn</li>
                        <li>Facebook</li>
                        <li>GitHub</li>
                        <li>AngelList</li>
                        <li>Dribbble</li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>Legal</h3>
                    <ul>
                        <li>Terms</li>
                        <li>Privacy</li>
                        <li>Cookies</li>
                        <li>Licenses</li>
                        <li>Settings</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <img src={LogoImg} alt="Logo" class="footer-logo"></img>
                    <p>© 2077 zysktechnologies. All rights reserved.</p>
            </div>
        </footer>

    )
}

export default Footer;