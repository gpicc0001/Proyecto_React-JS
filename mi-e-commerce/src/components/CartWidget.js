import React from 'react';
import carrito_3 from '../img/carrito_3.png'
import './cartwidget.css'


const CartWidget = () => {

    return(
    <>
        <div className='carrito'>
            <img className='logoCarrito' src={carrito_3} alt=""/>
            <p>1</p>
        </div>



    </>
    )
};

export default CartWidget;
