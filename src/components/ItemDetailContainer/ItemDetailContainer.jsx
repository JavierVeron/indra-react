import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import arrayProductos from "../Productos/Productos";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const {id} = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        setTimeout(() => {
            const promesa = new Promise((resolve, reject) => {
                resolve(arrayProductos.find(producto => producto.id === parseInt(id)));
            });

            promesa.then(respuesta => {
                setItem(respuesta);
            })
        }, 2000)
    }, [id])

    return(
        <ItemDetail item={item} />
    )
}

export default ItemDetailContainer;