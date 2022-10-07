import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import arrayProductos from "../Productos/Productos";
import Loading from "../Loading/Loading";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const {id} = useParams();
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            const promesa = new Promise((resolve, reject) => {
                resolve(arrayProductos.find(producto => producto.id === parseInt(id)));
                setLoading(false);
            });

            promesa.then(respuesta => {
                setItem(respuesta);
            })
        }, 2000)
    }, [id])

    return (
        <div className="container">
            {loading ? <Loading /> : <ItemDetail item={item} />}
        </div>
    )
}

export default ItemDetailContainer;