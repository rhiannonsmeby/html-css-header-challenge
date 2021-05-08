import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {NavLink} from 'react-router-dom';
import {faShieldAlt, faQuestionCircle, faMapMarkerAlt, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import './MobileNavExpanded.css';
import Lang from '../../assets/langmobile.png';

export default function MobileNavExpanded() {
    return (
        <nav>
            <ul className='nav-mobile-title'>
                <li className='nav-item-title-sec'><h3>Menu</h3></li>
            </ul>
            <ul className='nav-mobile-expanded'>
                <li className='nav-item-expanded'><NavLink to={`/solutions`} activeClassName='navActive'>
                    <p>SOLUTIONS</p> 
                    <FontAwesomeIcon icon={faChevronRight} className={'search'}/>
                </NavLink></li>
                <li className='nav-item-expanded'><NavLink to={`/products`} activeClassName='navActive'>
                    <p>PRODUCTS</p> 
                    <FontAwesomeIcon icon={faChevronRight} className={'search'}/>
                </NavLink></li>
                <li className='nav-item-expanded'><NavLink to={`/automation`} activeClassName='navActive'>
                    <p>AUTOMATION</p> 
                    <FontAwesomeIcon icon={faChevronRight} className={'search'}/>
                </NavLink></li>
                <li className='nav-item-expanded'><NavLink to={`/education`} activeClassName='navActive'>
                    <p>EDUCATION</p> 
                    <FontAwesomeIcon icon={faChevronRight} className={'search'}/>
                </NavLink></li>
                <li className='nav-item-expanded'><NavLink to={`/resources`} activeClassName='navActive'>
                    <p>RESOURCES</p> 
                    <FontAwesomeIcon icon={faChevronRight} className={'search'}/>
                </NavLink></li>
            </ul>
            <ul>
                <li className='secondary-nav-item-expanded'><FontAwesomeIcon icon={faQuestionCircle} className={'search'}/> Help</li>
                <li className='secondary-nav-item-expanded'><FontAwesomeIcon icon={faMapMarkerAlt} className={'search'}/> Where to Buy/Rent</li>
                <li className='secondary-nav-item-expanded'><FontAwesomeIcon icon={faShieldAlt} className={'search'}/> Safety</li>
                <li className='secondary-nav-item-expanded'><img src={Lang} alt='language'/></li>
            </ul>
        </nav>
    )
}