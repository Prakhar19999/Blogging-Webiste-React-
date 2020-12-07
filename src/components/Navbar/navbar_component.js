import React from 'react';
import './navbar.css';

const Navbar=(props)=>
{
    return(
        <div className="navbar">
            <ul className="navbarmenu">
                <li><a>Home</a></li>
                <li><a>About Us</a></li> 
            </ul>
        </div>
    )
}

export default Navbar