import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//import arrayProductos from "../Productos/Productos";
import Loading from "../Loading/Loading";
import ItemDetail from "./ItemDetail";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
    const {id} = useParams();
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);

    /* useEffect(() => {
        setTimeout(() => {
            const promesa = new Promise((resolve, reject) => {
                resolve(arrayProductos.find(producto => producto.id === parseInt(id)));
                setLoading(false);
            });

            promesa.then(respuesta => {
                setItem(respuesta);
            })
        }, 2000)
    }, [id]) */

    useEffect(() => { //Consulta de un item a Firestore
        const db = getFirestore();
        const orderDoc = doc(db, "items", id);
        getDoc(orderDoc).then((response) => {
            if (response.exists()) {
                setItem({id:response.id, ...response.data()});
                setLoading(false);
            }
        });
    }, [id]);

    /* useEffect(() => { //Proceso para cargar nuestros Productos del Mock a Firestore
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        arrayProductos.forEach(item => {
            addDoc(itemsCollection, {title:item.title, description:item.description, price:item.price, image:item.image, stock:item.stock, category:item.category});
        });
        console.log("Los productos fueron cargados con éxito!");
    }, []); */

    return (
        <div className="container">
            {loading ? <Loading /> : <ItemDetail item={item} />}
        </div>
    )
}

export default ItemDetailContainer;