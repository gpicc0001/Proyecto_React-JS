import React from 'react';
import carrito_3 from '../img/carrito_3.png'
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import './cartwidget.css'


const CartWidget = () => {

    const {totalQuantity} = useContext(CartContext)

    return(
    <>
        <div className='carrito'>
            <Link to= '/cart'  >
            <img className='logoCarrito' src={carrito_3} alt=""/>
            {totalQuantity}
            </Link>
        </div>
    </>
    )
};

export default CartWidget;



// style={{display: totalQuantity > 0 ? 'block' : 'none' }}