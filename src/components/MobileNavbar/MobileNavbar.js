import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faTimes, faSearch, faShieldAlt, faQuestionCircle, faMapMarkerAlt, faUserAlt, faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import './MobileNavbar.css';
import Logo from '../../assets/lincolnlogo.png';
import AmFlag from '../../assets/languageen.png';

export default function MobileNavbar() {
    return (
        <nav>
            <ul className='nav-mobile'>
                <li className='nav-item-title-sec'><NavLink exact to={`/`}><img className='title' src={Logo} alt="Lincoln Electric Logo"/></NavLink></li>
                <li className='nav-item-mobile'><FontAwesomeIcon icon={faSearch} className={'primary-mobile'}/></li>
                <li className='nav-item-mobile'><FontAwesomeIcon icon={faUserAlt} className={'primary-mobile'}/></li>
                <li className='nav-item-mobile'><FontAwesomeIcon icon={faShoppingCart} className={'primary-mobile'}/> 3</li>
            </ul>
        </nav>
    )
}