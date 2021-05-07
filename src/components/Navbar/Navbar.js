// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';
// import Dropdown from '../Dropdown/Dropdown';

// export default function Navbar() {
//     return (
//         <div>
//             <Link to={'/'} className=''>
//                 <h1>Lincoln Electric</h1>
//             </Link>
//             <nav className="navbar">
//                 <ul>
//                     <li>search</li>
//                     <li>profile</li>
//                     <li>shopping cart</li>
//                 </ul>
//             </nav>
//         </div>
//     )
// }
import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

export default function Navbar() {

    let [navToggle, setNavToggle] = useState(false);

    function handleClick() {
        setNavToggle(prevNavToggle => !prevNavToggle);
    }

    return (
      <div className='container'>
        <div>
            <div className='nav-toggle' id='navToggle'>
                <FontAwesomeIcon icon={faBars} className={navToggle ? 'hidden' : 'navIcon'} onClick={handleClick}/>
                <FontAwesomeIcon icon={faTimes} className={navToggle ? 'navIcon' : 'hidden'} onClick={handleClick}/>
            </div>   
        </div>
        <nav className={navToggle ? 'open' : 'closed'}>
            <h1>LINCOLN ELECTRIC</h1>
            <ul className='nav'>
                <li className='nav-item'><NavLink exact to={`/`} activeClassName='navActive'>SOLUTIONS</NavLink></li>
                <li className='nav-item'><NavLink to={`/products`} activeClassName='navActive'>PRODUCTS</NavLink></li>
                <li className='nav-item'><NavLink to={`/automation`} activeClassName='navActive'>AUTOMATION</NavLink></li>
                <li className='nav-item'><NavLink to={`/education`} activeClassName='navActive'>EDUCATION</NavLink></li>
                <li className='nav-item'><NavLink to={`/resources`} activeClassName='navActive'>RESOURCES</NavLink></li>
            </ul>
        </nav>
      </div>
    );
}