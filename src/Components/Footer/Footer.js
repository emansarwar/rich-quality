import React from 'react';
import './Footer.css'
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <h3>To know details about RICH QUALITY  <NavLink className="link-about" to='/about'>CLICK ME</NavLink></h3>
            <h2><small>© 2022 Envato Pty Ltd. Trademarks and brands are the property of their respective owners.</small></h2>
        </div>
    );
};

export default Footer;