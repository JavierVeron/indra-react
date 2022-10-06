import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import arrayProductos from "../Productos/Productos";

const ItemListContainer = () => {
    const {categoryId} = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(categoryId ? arrayProductos.filter(productos => productos.category === categoryId) : arrayProductos);
            }, 2000);
        });

        promesa.then((respuesta) => {
            setItems(respuesta);
        })
    }, [categoryId]);

    return (
        <div className="container">
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer;