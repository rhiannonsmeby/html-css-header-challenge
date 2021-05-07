import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faTimes, faSearch} from '@fortawesome/free-solid-svg-icons';
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
            <ul className='nav'>
                <li className='nav-item-title'><NavLink exact to={`/`}>LINCOLN ELECTRIC</NavLink></li>
                <li className='nav-item'><NavLink to={`/solutions`} activeClassName='navActive'>SOLUTIONS</NavLink></li>
                <li className='nav-item'><NavLink to={`/products`} activeClassName='navActive'>PRODUCTS</NavLink></li>
                <li className='nav-item'><NavLink to={`/automation`} activeClassName='navActive'>AUTOMATION</NavLink></li>
                <li className='nav-item'><NavLink to={`/education`} activeClassName='navActive'>EDUCATION</NavLink></li>
                <li className='nav-item'><NavLink to={`/resources`} activeClassName='navActive'>RESOURCES</NavLink></li>
                <li className='nav-item-search'>Search <FontAwesomeIcon icon={faSearch} className={'search'}/></li>
            </ul>
        </nav>
      </div>
    );
}