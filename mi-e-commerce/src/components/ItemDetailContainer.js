import React, { useEffect, useState } from "react";
import { getProductsById } from "../function.js";
import ItemDetail from "./ItemDetail.js";
import './itemDetailContainerStyle.css'
import { useParams } from "react-router-dom";



const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null) // estado inicial del contenedor. Va a mostrar un solo producto
     
    const {itemId} = useParams()

    useEffect(() => {
        getProductsById(itemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [itemId])
    return (

         <div className="itemDetailContainerStyle">
            {product ? <ItemDetail {...product} /> : <p>Loading...</p>}

         </div>
    )
}

export default ItemDetailContainer