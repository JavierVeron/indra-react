import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import arrayProductos from "../Productos/Productos";
import Loading from "../Loading/Loading";

const ItemListContainer = () => {
    const {categoryId} = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(categoryId ? arrayProductos.filter(productos => productos.category === categoryId) : arrayProductos);
                setLoading(false);
            }, 2000);
        });

        promesa.then((respuesta) => {
            setItems(respuesta);
        })
    }, [categoryId]);

    return (
        <div className="container">
            {loading ? <Loading /> : <ItemList items={items} />}
        </div>
    )
}

export default ItemListContainer;