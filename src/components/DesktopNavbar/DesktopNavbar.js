import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch, faShieldAlt, faQuestionCircle, faMapMarkerAlt, faUserAlt, faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import Logo from '../../assets/lincolnlogo.png';
import AmFlag from '../../assets/languageen.png';
import './DesktopNavbar.css';
import Dropdown from '../Dropdown/Dropdown';

export default function DesktopNavbar() {

    //event handler for dropdown menu
    let [dropdownToggle, setDropdownToggle] = useState(false);

    function handleDropdownClick() {
        setDropdownToggle(prevDropdownToggle => !prevDropdownToggle);
    }

    return (
      <div className='container'>
        <nav>
            <ul className='secondary-nav'>
                <li className='nav-item-title-sec'><img className='lang' src={AmFlag} alt="American Flag"/></li>
                <li className='secondary-nav-item'><FontAwesomeIcon icon={faShieldAlt} className={'search'}/></li>
                <li className='secondary-nav-item'><FontAwesomeIcon icon={faQuestionCircle} className={'search'}/></li>
                <li className='secondary-nav-item'><FontAwesomeIcon icon={faMapMarkerAlt} className={'search'}/></li>
                <li className='secondary-nav-item'><FontAwesomeIcon icon={faUserAlt} className={'search'}/></li>
                <li className='secondary-nav-item' style={{'backgroundColor': '#B81830'}}><FontAwesomeIcon icon={faShoppingCart} className={'search'}/> 3</li>
            </ul>
            <ul className='nav'>
                <li className='nav-item-title'><NavLink exact to={`/`}><img className='title' src={Logo} alt="Lincoln Electric Logo"/></NavLink></li>
                <li className='nav-item'><NavLink to={`/solutions`} activeClassName='navActive' onClick={handleDropdownClick}>SOLUTIONS</NavLink></li>
                <li className='nav-item'><NavLink to={`/products`} activeClassName='navActive'>PRODUCTS</NavLink></li>
                <li className='nav-item'><NavLink to={`/automation`} activeClassName='navActive'>AUTOMATION</NavLink></li>
                <li className='nav-item'><NavLink to={`/education`} activeClassName='navActive'>EDUCATION</NavLink></li>
                <li className='nav-item'><NavLink to={`/resources`} activeClassName='navActive'>RESOURCES</NavLink></li>
            </ul>
            <p className='nav-item-search'>Search <FontAwesomeIcon icon={faSearch} className={'search'}/></p>
            {dropdownToggle ? <Dropdown /> : null}
        </nav>
      </div>
    );
}