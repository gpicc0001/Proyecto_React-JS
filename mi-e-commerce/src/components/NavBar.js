import React from 'react';
import './navbar.css';
import CartWidget from './CartWidget';
import logo_ecommerce from '../img/logo_ecommerce.png' 
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {

   
    return (
        <>

            <nav className='micomponente'>
                <Link to='/'>
                    <img className='logoEcommerce' src={logo_ecommerce} alt="foto1" />
                </Link>
                
                <NavLink className='btnNavBar' to ='/category/Celulares'> Celulares</NavLink>
                <NavLink className='btnNavBar' to ='/category/Tablets'> Tablets</NavLink>
                <NavLink className='btnNavBar' to ='/category/Televisores'> Televisores</NavLink>
                
                <CartWidget />

            </nav>

        </>
    )
};

export default NavBar;


