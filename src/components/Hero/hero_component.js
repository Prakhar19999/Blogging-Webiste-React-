import React from 'react';
import './hero.css';
import Card from '../UI/Card/card_component';
import Logo from '../Logo/logo_component';
import Navbar from '../Navbar/navbar_component';

const Hero=props=>{
    return(
        <div className="hero">
            <Card>
                <div style={{padding:"50px"}}>
                    <Logo/>
                </div>
                <Navbar/>
            </Card>
        </div>
    )
}

export default Hero