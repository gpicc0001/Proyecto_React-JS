import React, {useState, useEffect} from 'react';
import { getProducts, getProductsByCategory, getProductsById } from '../function';
import ItemList from './ItemList';
import './itemListContainer.css';
import { useParams } from 'react-router-dom';


const ItemListContainer = ({saludo}) => {
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    },[categoryId])
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