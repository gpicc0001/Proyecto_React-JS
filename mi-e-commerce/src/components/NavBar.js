import React from 'react';
import './navbar.css';
import CartWidget from './CartWidget';
import logo_ecommerce from '../img/logo_ecommerce.png' 


const NavBar = () => {

   
    return (
        <>
            <div className='micomponente'>
                <img className='logoEcommerce' src={logo_ecommerce} alt="foto1" />
                <button className='btnNavBar'>Home</button>
                <button className='btnNavBar'>About us</button>
                <button className='btnNavBar'>Contact</button>
                
                <CartWidget />

            </div>

        </>
    )
};

export default NavBar;