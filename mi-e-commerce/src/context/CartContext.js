import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    console.log(cart)

    const addItem = (items, quantity) => {
        if(!isInCart(items.id)) {
            setCart(prev => [...prev, {...items, quantity}])
        } else {
            console.error ('El producto ya fue agregado')
        }
    }

    const removeItem = (id) => {
        const cartUpdated = cart.filter(prod => prod.id !== id)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (items) =>{
        return cart.some(prod => prod.id === items.id)
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart}}>{children} </CartContext.Provider>
    )
}

