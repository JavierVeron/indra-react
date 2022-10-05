import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import arrayProductos from "../Productos/Productos";

const ItemListContainer = ({greeting}) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(arrayProductos);
            }, 2000)
        });

        promesa.then((respuesta) => {
            setItems(respuesta);
        })
    }, []);

    return (
        <div className="container">
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer;