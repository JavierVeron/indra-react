import React, { useState, useEffect, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { cartContext } from "../CartContext/CartContext";

const ItemDetail = ({item}) => {
    const {addItem} = useContext(cartContext);
    const [stockProducto, setStockProducto] = useState(0);

    const onAdd = (quantityToAdd) => {
        setStockProducto(stockProducto - quantityToAdd);
        addItem(item, quantityToAdd);
    }

    useEffect(() => {
        setStockProducto(item.stock);
    }, [item]);

    return(
        <div className="container py-5">
            <div className="row">
                <div className="col-md-4 offset-md-2">
                    <img src={item.image} className="img-fluid" alt={item.title} />
                </div>
                <div className="col-md-4">
                    <h3 className="fs-3 text-center">{item.title}</h3>
                    <p className="fs-5 text-center">{item.description}</p>
                    <p className="fw-light text-center"><b>${item.price}</b></p>
                    <p className="fw-light text-center">Stock: {stockProducto}</p>
                    <ItemCount initial={1} stock={item.stock} onAdd={onAdd} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;