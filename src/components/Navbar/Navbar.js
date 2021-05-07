import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faTimes, faSearch, faShieldAlt, faQuestionCircle, faMapMarkerAlt, faUserAlt, faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import Logo from '../../assets/lincolnlogo.png';
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
            <ul className='secondary-nav'>
                <li className='nav-item'><FontAwesomeIcon icon={faShieldAlt} className={'search'}/></li>
                <li className='nav-item'><FontAwesomeIcon icon={faQuestionCircle} className={'search'}/></li>
                <li className='nav-item'><FontAwesomeIcon icon={faMapMarkerAlt} className={'search'}/></li>
                <li className='nav-item'><FontAwesomeIcon icon={faUserAlt} className={'search'}/></li>
                <li className='nav-item'><FontAwesomeIcon icon={faShoppingCart} className={'search'}/></li>
            </ul>
            <ul className='nav'>
                <li className='nav-item-title'><NavLink exact to={`/`}><img className='title' src={Logo} alt="Lincoln Electric Logo"/></NavLink></li>
                <li className='nav-item'><NavLink to={`/solutions`} activeClassName='navActive'>SOLUTIONS</NavLink></li>
                <li className='nav-item'><NavLink to={`/products`} activeClassName='navActive'>PRODUCTS</NavLink></li>
                <li className='nav-item'><NavLink to={`/automation`} activeClassName='navActive'>AUTOMATION</NavLink></li>
                <li className='nav-item'><NavLink to={`/education`} activeClassName='navActive'>EDUCATION</NavLink></li>
                <li className='nav-item'><NavLink to={`/resources`} activeClassName='navActive'>RESOURCES</NavLink></li>
            </ul>
            <p className='nav-item-search'>Search <FontAwesomeIcon icon={faSearch} className={'search'}/></p>
        </nav>
      </div>
    );
}