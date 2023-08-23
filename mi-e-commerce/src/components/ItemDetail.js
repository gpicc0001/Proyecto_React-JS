import React from "react"
import Counter from "./Counter"
import './itemDetailStyle.css'



const ItemDetail = ({id, name, category,description, img, price, stock}) => {


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
                    <Counter initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)} /> 
                </footer>
            </article>
        </div>

    )
}

export default ItemDetail