import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import './Dropdown.css';

function Dropdown(props) {
    
    return (
        <div className='dropdown-container'>
            <div className='dropdown-back'>
                <p><FontAwesomeIcon icon={faChevronLeft}/> GO BACK</p> 
            </div>
            <div className='dropdown'>
                <div className="dropdownli"><p>Soultions By Industry <span className='mobile-element' style={{'alignSelf': 'right'}}><FontAwesomeIcon icon={faChevronRight} className='icon-nav'/></span></p></div>
                <div className="dropdownli"><p>Solutions By Process <span className='mobile-element' style={{'alignSelf': 'right'}}><FontAwesomeIcon icon={faChevronRight} className='icon-nav'/></span></p></div>
                <div className="dropdownli"><p>Software Solutions <span className='mobile-element' style={{'alignSelf': 'right'}}><FontAwesomeIcon icon={faChevronRight} className='icon-nav'/></span></p></div>
                <div className="dropdownli"><p>Services <span className='mobile-element' style={{'alignSelf': 'right'}}><FontAwesomeIcon icon={faChevronRight} className='icon-nav'/></span></p></div>
            </div>
        </div>
    );
}

Dropdown.propTypes = {
    history: PropTypes.object
}


export default Dropdown;