import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
//import arrayProductos from "../Productos/Productos";
import Loading from "../Loading/Loading";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";

const ItemListContainer = () => {
    const {categoryId} = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    /* useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(categoryId ? arrayProductos.filter(productos => productos.category === categoryId) : arrayProductos);
                setLoading(false);
            }, 2000);
        });

        promesa.then((respuesta) => {
            setItems(respuesta);
        })
    }, [categoryId]); */

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const filter = categoryId ? query(itemsCollection, where("category", "==", categoryId)) : itemsCollection;
        getDocs(filter).then((response) => {
            if (response.size > 0) {
                setItems(response.docs.map(item => ({id:item.id, ...item.data()})));
                setLoading(false);
            }
        });
    }, [categoryId]);

    return (
        <div className="container">
            {loading ? <Loading /> : <ItemList items={items} />}
        </div>
    )
}

export default ItemListContainer;