import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    console.log(cart)

    const addItem = (item, quantity) => {
        if(!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}])
        } else {
            console.error ('El producto ya fue agregado')
        }
    }

    const removeItem = (items) => {
        const cartUpdated = cart.filter(prod => prod.id !== items.id)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (item) =>{
        return cart.some(prod => prod.id === item.id)
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart}}>{children} </CartContext.Provider>
    )
}

