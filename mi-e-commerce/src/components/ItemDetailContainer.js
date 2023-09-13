import React, { useEffect, useState } from "react";
import { getProductsById } from "../function.js";
import ItemDetail from "./ItemDetail.js";
import './itemDetailContainerStyle.css'
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../index.js";


const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null) // estado inicial del contenedor. Va a mostrar un solo producto
    const [loading, setLoading] = useState(true) 
    const {itemId} = useParams()

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, 'items', itemId)

        getDoc(docRef)
            .then(response => {
                const data = response.data()
                const productAdapted = {id:response.id, ...data}
                setProduct(productAdapted)
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false)
            })

    },[itemId])


   
    return (

         <div className="itemDetailContainerStyle">
            {product ? <ItemDetail {...product} /> : <p>Loading...</p>}

         </div>
    )
}

export default ItemDetailContainer


// useEffect(() => {
//     getProductsById(itemId)
//         .then(response => {
//             setProduct(response)
//         })
//         .catch(error => {
//             console.error(error)
//         })
// }, [itemId])