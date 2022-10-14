import React from 'react';
import './Footer.css'
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <hr/>
            <h4>To know details about RICH QUALITY  <NavLink className="link-about" to='/about'>CLICK ME</NavLink></h4>
            <h4><small>© 2022 Envato Pty Ltd. Trademarks and brands are the property of their respective owners.</small></h4>
        </div>
    );
};

export default Footer;