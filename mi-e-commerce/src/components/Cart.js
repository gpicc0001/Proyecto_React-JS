import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import './cart.css'


const Cart = () => {

    const {cart, clearCart, totalQuantity, total} = useContext(CartContext);

    if (totalQuantity === 0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>

                <Link to='/' className='counterButton'>Productos</Link>
            </div>
        )
    }


    return (
        <>
        <div className='cartStyle'>
            {cart.map(p => <CartItem key={p.id}{...p}/>)}
            <h3 className='cartStyleText'>Total: ${total} </h3>
            <button onClick= {() => clearCart() }>Limpiar carrito</button>
            <Link to='/checkout'>Check out</Link>
        </div>     
        </>
    )
}

export default Cart;