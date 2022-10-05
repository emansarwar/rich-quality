import React from 'react';
import { Link } from 'react-router-dom';
// import Semantic from '../Semantic/Semantic';
import './Blog.css'

const Blog = () => {
    return (
        <>
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

        </>
    );
};

export default Blog;