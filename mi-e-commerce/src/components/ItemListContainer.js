import React, {useState, useEffect} from 'react';
import { getProducts, getProductsByCategory, getProductsById } from '../function';
import ItemList from './ItemList';
import './itemListContainer.css';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from 'firebase/firestore';
import {db} from '../index.js'


const ItemListContainer = ({saludo}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId
            ? query(collection(db,'items'), where('category', '==', categoryId))
            :collection(db, 'items')

        getDocs(collectionRef)
            .then(response => {
                const productAdapted = response.doc.map(doc => {
                    const data = doc.data()
                    return {id: doc.id, ...data}
                })
                setProducts(productAdapted)
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false)
            })

    },[])
    return(
        <>
            <div className='itemListContainerStyle'>
                <h1>{saludo}</h1>
                <ItemList products={products}/>

            </div>
        
        
        </>
    )
};

export default ItemListContainer;

// const asyncFunc = categoryId ? getProductsByCategory : getProducts

//         asyncFunc(categoryId)
//             .then(response => {
//                 setProducts(response)
//             })
//             .catch(error => {
//                 console.error(error)
//             })
//     },[categoryId])