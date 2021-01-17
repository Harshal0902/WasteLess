import React from 'react';
import { NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = ({ logOut }) => {
    return (
        <div className='navbar'>
            <div className='link-container'>
            <NavLink className='link' to='/'>
                <h4 className='link navbar-title'>WasteLess</h4></NavLink>
                <span className='links'>
                    <NavLink className='link' to='/'>Home</NavLink>
                    <NavLink className='link' to='/food'>Food</NavLink>
                    <NavLink className='link' to='/dashboard'>Dashboard</NavLink>
                </span>
            </div>
        </div>
    );
}

export default NavBar;
