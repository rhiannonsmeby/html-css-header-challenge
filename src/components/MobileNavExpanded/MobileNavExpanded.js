import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {NavLink} from 'react-router-dom';
import {faShieldAlt, faQuestionCircle, faMapMarkerAlt, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import './MobileNavExpanded.css';
import Lang from '../../assets/langmobile.png';
import Dropdown from '../Dropdown/Dropdown';

export default function MobileNavExpanded() {
    let [dropdownToggle, setDropdownToggle] = useState(false);

    function handleDropdownClick() {
        setDropdownToggle(prevDropdownToggle => !prevDropdownToggle);
    }
    return (
        <nav className='nav-ex'>
            <ul className='nav-mobile-title'>
                <li className='nav-item-title-sec'><h3>Menu</h3></li>
            </ul>
            {dropdownToggle ? <Dropdown dropdownToggle={handleDropdownClick}/> : (
            <div>
            <div className='nav-mobile-expanded'>
                <div className='nav-item-expanded'><NavLink to='/solutions' onClick={handleDropdownClick}>
                    <p className='p-nav'>SOLUTIONS <span style={{'alignSelf': 'right'}} className='span-menu'><FontAwesomeIcon icon={faChevronRight} className='icon-nav'/></span></p></NavLink>
                </div>
                <div className='nav-item-expanded'><NavLink to='/products'>
                    <p className='p-nav'>PRODUCTS <span style={{'alignSelf': 'right'}} className='span-menu'><FontAwesomeIcon icon={faChevronRight} className='icon-nav'/></span></p></NavLink> 
                </div>
                <div className='nav-item-expanded'><NavLink to='/automation'>
                    <p className='p-nav'>AUTOMATION <span style={{'alignSelf': 'right'}} className='span-menu'><FontAwesomeIcon icon={faChevronRight} className='icon-nav'/></span></p></NavLink> 
                </div>
                <div className='nav-item-expanded'><NavLink to='/education'>
                    <p className='p-nav'>EDUCATION <span style={{'alignSelf': 'right'}} className='span-menu'><FontAwesomeIcon icon={faChevronRight} className='icon-nav'/></span></p></NavLink> 
                </div>
                <div className='nav-item-expanded'><NavLink to='/resources'>
                    <p className='p-nav'>RESOURCES <span style={{'alignSelf': 'right'}} className='span-menu'><FontAwesomeIcon icon={faChevronRight} className='icon-nav'/></span></p></NavLink> 
                </div>
            </div>
            <ul className='secondary-nav-expanded'>
                <li className='secondary-nav-item-expanded'><FontAwesomeIcon icon={faQuestionCircle} className={'search'}/> Help <FontAwesomeIcon icon={faChevronRight} className='icon-nav'/></li>
                <li className='secondary-nav-item-expanded'><FontAwesomeIcon icon={faMapMarkerAlt} className={'search'}/> Where to Buy/Rent</li>
                <li className='secondary-nav-item-expanded'><FontAwesomeIcon icon={faShieldAlt} className={'search'}/> Safety</li>
                <li className='secondary-nav-item-expanded'><img src={Lang} alt='language' className='img-ex'/></li>
            </ul>
            </div>)}
        </nav>
    )
}