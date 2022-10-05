import React from 'react';
import { Link } from 'react-router-dom';
import './Semantic.css'

const Semantic = () => {
    return (
        <>

            <div>
                <div>
                    <div className='title-link'>
                        <div>
                            <h2 className='blog-title'>BLOG-PAGE</h2>


                        </div>
                        <div>
                            <nav className='blog-link'>
                                <Link to='/semantic'>SEMANTIC TAG</Link>
                                <Link to='/context'>CONTEXT API</Link>
                            </nav>
                        </div>
                    </div>
                    <h2>SEMANTIC-TAG</h2>
                    <hr/>
                    <h3>Introduction</h3>
                    <p>Many web sites contain HTML code like: div id="nav"  div class="header"   div id="footer" to indicate navigation, header, and footer.</p>
                    <p>In HTML there are some semantic elements that can be used to define different parts of a web page:  </p>
                </div>
                <div className='li-figure'>
                    <div className='li-item'>
                        <li>article</li>
                        <li>aside</li>
                        <li>details</li>
                        <li>figcaption</li>
                        <li>figure</li>
                        <li>footer</li>
                        <li>header</li>
                        <li>main</li>
                        <li>mark</li>
                        <li>nav</li>
                        <li>section</li>
                        <li>summary</li>

                        <li>time</li>
                    </div>
                    <div className='figure-item'>
                        <div className='fig-header'><h2>header</h2></div>
                        <div className='fig-nav'><h2>nav</h2></div>
                        <div className='complex'>
                            <div className='sec-art'>
                                <div>
                                    <h2>section</h2>
                                </div>
                                <div>
                                    <h2>article</h2>
                                </div>

                            </div>
                            <div className='aside'>
                                <h2>aside</h2>
                            </div>
                        </div>
                        <div>
                            <h2>footer</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Semantic;