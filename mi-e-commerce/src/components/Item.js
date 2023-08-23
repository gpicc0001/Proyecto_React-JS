import React from "react";
import './item.css';
import {Link} from "react-router-dom"


const Item = (products) =>{

    // const {id, name, img, price, stock} = products

    return(
        <>
            <div className="cardItem">
                <article className="cardStyle">
                    <header>
                        <h2 className="cardText">{products.name}</h2>
                    </header>
                    <picture>
                        <img className = "itemImg" src={products.img} alt={products.name} />
                    </picture>
                    <section>
                        <p>Precio:${products.price} </p>
                        <p>Stock:{products.stock} </p>
                    </section>
                    <footer>
                        <Link to= {`/item/${products.id}`}>Ver detalle</Link>
                    </footer>
                </article>
            </div>
        </>
    )
}

export default Item

