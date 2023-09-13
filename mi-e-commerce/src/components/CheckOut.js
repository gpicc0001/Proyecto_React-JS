import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Timestamp, collection, documentId, addDoc, writeBatch } from "firebase/firestore";
import { db } from "../index";
import { getDocs, query, where } from 'firebase/firestore';
import CheckOutForm from "./CheckOutForm";




const CheckOut = () => {

    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const { cart, total, clearCart} = useContext(CartContext)

    const createOrder = async ({name,phone, email}) => {
        setLoading(true)

        try {
            const objOrder = {
                buyer: {name, phone, email},
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }
            
            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(item => item.id)

            const productRef = collection(db,'items')

            const productsAddedFromFirestore = await getDocs(query(productRef, where(documentId()),'in', ids))

            const {docs} = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(item => item.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, {stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({id: doc.id, ...dataDoc})
                }
                
            });

            if (outOfStock.lenght === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()
            }else{
                console.error('hay productos que no tienen stock');
            }
        } catch(error) {
            console.log(error);
        }finally {
            setLoading(false);
        }
    }

    if (loading) {
        return <h1>Se esta generando su orden...</h1>
    }

    return (

        <>
            <div>
                <h1>Checkout</h1>
                <CheckOutForm onConfirm={createOrder} />
            </div>
        </>
    )
}


export default CheckOut;