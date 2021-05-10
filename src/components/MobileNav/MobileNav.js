import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons';
import MobileNavbar from '../MobileNavbar/MobileNavbar';
import MobileNavExpanded from '../MobileNavExpanded/MobileNavExpanded';
import './MobileNav.css';

export default function MobileNav() {
    let [navToggle, setNavToggle] = useState(false);

    //event handler for hamburger nav
    function handleNavClick() {
        setNavToggle(prevNavToggle => !prevNavToggle);
    }

    return (
        <nav>
            <ul className='nav-mobile'>
                <NavLink to={'/navigation'}>
                <li className='nav-hamburger'>
                    <div className='nav-toggle-r' id='navToggle'>
                        <FontAwesomeIcon icon={faBars} className={navToggle ? 'hidden' : 'navIcon'} onClick={handleNavClick}/>
                    </div>                 
                </li>
                </NavLink>
                <NavLink exact to={'/'}>
                <li className='nav-hamburger'>
                    <div className='nav-toggle-l' id='navToggle'> 
                        <FontAwesomeIcon icon={faTimes} className={navToggle ? 'navIconClose' : 'hidden'} onClick={handleNavClick}/>
                    </div>
                </li> 
                </NavLink>
            </ul>
            {navToggle ? <MobileNavExpanded /> : <MobileNavbar/>}
        </nav>
    )
}