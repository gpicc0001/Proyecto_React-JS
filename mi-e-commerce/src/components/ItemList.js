import React from "react";
import Item from "./Item";
import './itemList.css';

const ItemList = ({products}) => {

    return(
        <div className="itemListStyle">
            {products.map((prod) => (<Item key={prod.id} {...prod}/>))}
        </div>


    )
}

export default ItemList