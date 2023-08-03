import React from 'react';
import carrito from '../img/carrito.png'
import './cartwidget.css'


const CartWidget = () => {

    return(
    <>
        <div className='carrito'>
            <img className='logoCarrito' src={carrito} alt=""/>
            <p>1</p>
        </div>



    </>
    )
};

export default CartWidget;
