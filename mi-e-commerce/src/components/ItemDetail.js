import { useContext, useState } from "react"
import React from "react"
import Counter from "./Counter"
import './itemDetailStyle.css'
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"


const ItemDetail = ({id, name, category,description, img, price, stock}) => {

    const [quantityAdded, setQuantityAdded] = useState (0)

    const {addItem} = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, price
        }

        addItem(item,quantity)
    }


    return(

        <div className="itemDetailCard">
            <article className="itemDetailStyle">
                <header className="itemDetailHeader">
                    <h2> {name} </h2>
                </header>
                <picture>
                    <img src={img}  alt= {name} className="imgItemDetail" />
                </picture>
                <section className="itemDetailSection">
                    <p>Catergoria: {category} </p>
                    <p>Descripcion: {description} </p>
                    <p>Precio: ${price} </p>
                </section>
                <footer className="itemDetailFooter">
                    {
                        quantityAdded > 0 ? (<Link to='/cart' className="counterButton">Terminar compra</Link>
                            ) : (
                                <Counter initial={1} stock={stock} onAdd={handleOnAdd} /> 
                        )
                    }
                </footer>
            </article>
        </div>

    )
}

export default ItemDetail