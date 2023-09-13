import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartItem = ({id, name, img, quantity, price}) =>{

    const {removeItem} = useContext(CartContext)

    const handleRemove = () => {
        removeItem(id);
    };


    return(

        <>
            <div>
                <div>
                    <img src={img} alt={name} />
                    <div>
                        <h2>{name}</h2>
                        <p>Quantity: {quantity} </p>
                        <p>Price: {price} </p>
                    </div>
                </div>
                <button onClick={handleRemove}>Remover</button>
            </div>  
        </>
    )
}

export default CartItem;