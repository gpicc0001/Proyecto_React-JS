import { getFirestore } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "..";
import { collection, addDoc} from "firebase/firestore";




const CheckOutForm = ({onConfirm}) => {

    const [form, setForm] = useState({
        name:'',
        phone:'',
        email:'',
    });

    const [id, setId] = useState();

    const changeHandler = (ev) => {
        const {name, value } = ev.target;
        setForm ({...form, [name]:value})
    }

    const submitHandler = (event) => {
        event.preventDefault()

    
    const db = getFirestore()

    const contactFormCollection = collection(db, 'contactform');
    addDoc(contactFormCollection, form).then(snapshop => setId(snapshop.id))

    }

    return (

        <>
        {typeof id !== "undefined" ? <div>El pedido se realizo correctamente: su Id es: {id}</div> : 
            <div>
            <form onSubmit={submitHandler}>
                <label>
                    Nombre
                    <input htmlFor="name" type="text" name='name' id='name' value={form.name} onChange={changeHandler} />
                </label>
                <label>
                    Telefono
                    <input htmlFor="phone" type="number" name='phone' id='phone' value={form.phone} onChange={changeHandler}  />
                </label>
                <label>
                    Email
                    <input htmlFor="email" type="email" name='email' id='email' value={form.email} onChange={changeHandler}  />
                </label>
                <button>Enviar</button>
            </form>
        </div>}
            





        </>
    )
}

export default CheckOutForm