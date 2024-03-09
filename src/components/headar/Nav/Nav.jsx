import React from 'react';
import './nav.css'
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='navbar  '>
            <NavLink  to='/allmeal'>All</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
        </div >
    );
};

export default Nav;