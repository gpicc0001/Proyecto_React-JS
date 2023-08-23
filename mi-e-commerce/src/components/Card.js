import React from "react";
import './card.css';



const Card = ({children}) => {
    console.log({children});

    return (
        <div className="cardStyle">{children} </div>

    );

}

export default Card;