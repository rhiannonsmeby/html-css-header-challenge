import React from 'react';
import {NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import './Dropdown.css';

export default function Dropdown(props) {
    return (
        <div className='dropdown-container'>
            <div className='dropdown-back' onClick={props.dropdownToggle}>
                <NavLink to='/navigation' className='go-back'><p><FontAwesomeIcon icon={faChevronLeft}/> GO BACK</p></NavLink> 
            </div>
            <div className='dropdown'>
                <div className="dropdownli"><p>Soultions By Industry <span className='mobile-element' style={{'alignSelf': 'right'}}><FontAwesomeIcon icon={faChevronRight} /></span></p></div>
                <div className="dropdownli"><p>Solutions By Process <span className='mobile-element' style={{'alignSelf': 'right'}}><FontAwesomeIcon icon={faChevronRight} /></span></p></div>
                <div className="dropdownli"><p>Software Solutions <span className='mobile-element' style={{'alignSelf': 'right'}}><FontAwesomeIcon icon={faChevronRight} /></span></p></div>
                <div className="dropdownli"><p>Services <span className='mobile-element' style={{'alignSelf': 'right'}}><FontAwesomeIcon icon={faChevronRight} /></span></p></div>
            </div>
        </div>
    );
}