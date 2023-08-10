import React, {useState} from "react";


const Counter = () => {
    const [counter, setCounter] = useState(0);

    const buttonClickHandler = () =>{
        setCounter(counter + 1);
    }
    return(
       <div>
           <button onClick={buttonClickHandler}>Counter</button>
           {counter}
       </div> 

    );
}

export default Counter;
