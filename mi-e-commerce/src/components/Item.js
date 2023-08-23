import React from "react";
import './item.css';
import {Link} from "react-router-dom"

const Item = ({id, name, img, price, stock}) =>{


    return(
        <div className="cardItem">
            <article className="cardStyle">
                <header>
                    <h2 className="cardText">{name}</h2>
                </header>
                <picture>
                    <img className = "itemImg" src={img} alt={name} />
                </picture>
                <section>
                    <p>Precio:${price} </p>
                    <p>Stock:{stock} </p>
                </section>
                <footer>
                    <Link to= {`/item/${id}`}>Ver detalle</Link>
                </footer>
            </article>
        </div>
    )
}

export default Item