import React from 'react';
import './Header.css';
import { Link} from 'react-router-dom';

const Header = () => {
    
    return (
        <div className='header'>
            <div className='header-logo'>RICH QUALITY</div>
            <div>
                 <nav className='header-link'>
                     <Link to='/home'>HOME</Link>
                     <Link to='/reviews'>REVIEWS</Link>
                     <Link to='/dashboard'>DASHBOARD</Link>
                     <Link to='/blog'>BLOG</Link>
                     <Link to='/about'>ABOUT</Link>
                 </nav>
            </div>
        </div>
    );
};

export default Header;

// import React from 'react';
// import './Header.css';
// import { Link} from 'react-router-dom';

// const Header = () => {
    
//     return (
//         <div>
//             <nav className='header'>
//                 <Link to='/home'>HOME</Link>
//                 <Link to='/reviews'>REVIEWS</Link>
//                 <Link to='/dashboard'>DASHBOARD</Link>
//                 <Link to='/blog'>BLOG</Link>
//                 <Link to='/about'>ABOUT</Link>
//             </nav>
//         </div>
//     );
// };

// export default Header;