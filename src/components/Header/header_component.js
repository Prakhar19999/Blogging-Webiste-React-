import React from 'react'
import './header.css'

const Header = (props)=>
{
    return(
        <header className="header">
            <nav className="headermenu">
                <a href="#">Home</a>
                <a href="#">About Us</a>
            </nav>
            <div>
            Social Media Links
            </div>
        </header>
    )
}
export default Header