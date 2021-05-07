import React from 'react';
import './Header.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    return (
        <header>
            <nav className="main-nav">
                <FontAwesomeIcon icon={faBars} /*className={navToggle ? 'hidden' : 'navIcon'} onClick={handleClick}**//>
                <h1 className='title'>LINCOLN ELECTRIC</h1>
                <ul className="page-nav">
                    <li>SOLUTIONS</li>
                    <li>PRODUCTS</li>
                    <li>AUTOMATION</li>
                    <li>EDUCATION</li>
                    <li>RESOURCES</li>
                </ul>
                <p>Search</p>
                <FontAwesomeIcon icon={faTimes} /*className={navToggle ? 'navIcon' : 'hidden'} onClick={handleClick}**//>
            </nav>
        </header>
    )
}