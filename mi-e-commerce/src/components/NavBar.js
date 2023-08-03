import React from 'react';
import './navbar.css';
import CartWidget from './CartWidget';
import ecommerce_logo from '../img/ecommerce_logo.png' 


const NavBar = () => {

    /*
    mi componente recibe desde el Padre APP la informacion, en este caso recibe como props el src.
    Para solucionar el problema de dos padres, se colocan las boquitas vacias. solucion aprobada por React. en caso de necesitar se puede usar un DIV.
    */
    return (
        <>
            <div className='micomponente'>
                <img src={ecommerce_logo} alt="foto1" />
                <button className='btnNavBar'>Inicio</button>
                <button className='btnNavBar'>About us</button>
                <button className='btnNavBar'>Contacto</button>
                
                <CartWidget />

            </div>

        </>
    )
};

export default NavBar;