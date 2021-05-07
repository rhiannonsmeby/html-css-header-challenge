import React from 'react';
import './Dropdown.css';

export default function Dropdown() {
    return (
        <div className='dropdown'>
            <ul>
                <li className="dropdownli">Soultions By Industry</li>
                <li className="dropdownli">Solutions By Process</li>
                <li className="dropdownli">Software Solutions</li>
                <li className="dropdownli">Services</li>
            </ul>
        </div>
    );
}