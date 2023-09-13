import React, { useState } from "react";
import Item from "./Item";
import './itemList.css';
import {getDocs, getFirestore, collection} from 'firebase/firestore'

import { useEffect } from "react";



const ItemList = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const db = getFirestore();

        const itemsCollection = collection (db, 'items')
        
        getDocs(itemsCollection).then((snapshot) => {
            const docs = snapshot.docs.map((doc) =>({id: doc.id, ...doc.data() }));
            setItems(docs);
        });

    }, []);

    return (

        <div>
            <div className="itemListStyle">
//             {items.map((item) => (<Item key={item.id} {...item} />))}
//         </div>
        </div>

    )
}

export default ItemList

// const ItemList = ({products}) => {

    

//     return(
//         <div className="itemListStyle">
//             {products.map((prod) => (<Item key={prod.id} {...prod} />))}
//         </div>


//     )
// }

// export default ItemList