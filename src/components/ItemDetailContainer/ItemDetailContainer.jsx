import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import arrayProductos from "../Productos/Productos";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});

    useEffect(() => {
        setTimeout(() => {
            const promesa = new Promise((resolve, reject) => {
                let pos = Math.round(Math.random() * arrayProductos.length);
                console.log(pos);
                resolve(arrayProductos[pos]);
            });

            promesa.then(respuesta => {
                setItem(respuesta);
            })
        }, 2000)
    }, [])

    return(
        <ItemDetail item={item} />
    )
}

export default ItemDetailContainer;