
// import React, {useState, useEffect} from 'react';


// const Semaforo = () => {

// const [encendido, setEncendido] = useState(false);

// const [counter, setCounter] = useState(0);

// useEffect(() => {
//     console.log('el componente se monta');
// }, []);

// useEffect(() => {
//     console.log('el componente se ha actualizado');
// });

// useEffect(() => {
//     console.log('se ha cambiado encendido');
// }, [encendido]);

// const semaforoClinckHandler = () =>{
//     console.log('click!');
//     setEncendido(!encendido);
// }

// const counterButtonOnClickHandler = () => {
//     setCounter(counter + 1);
// }
//     return(
//         <>
        
//         <div onClick={semaforoClinckHandler}> {encendido ? <span>🟢</span> : <span>🔴</span>}
//         </div> 
//         <div>
//             <button onClick={counterButtonOnClickHandler}>Counter</button>
//             {counter}
//         </div>
        
        
//         </>
//     );
// };


// export default Semaforo;
