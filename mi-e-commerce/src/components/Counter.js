import React, {useState} from "react";
import './counter.css'


const Counter = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial);

    const decrement = () => {
        if (quantity > 1) {
          setQuantity((prevState) => prevState - 1);
        }
      };
    
      const increment = () => {
        if (quantity < stock) {
          setQuantity((prevState) => prevState + 1);
        }
      };
    return(
       <div className="counterContainerStyle">
           <div className="counter">
            <button className="counterButton" onClick={decrement}>-</button>
            <h4 className="counterNumber">{quantity}</h4>
            <button className="counterButton" onClick={increment}>+</button>
           </div>
           <div className="counterAdd">
            <button className="counterButtonAdd" onClick={() => onAdd(quantity)} disabled={!stock}>Agregar al carrito</button>
           </div>
       </div> 

    );
}

export default Counter;
