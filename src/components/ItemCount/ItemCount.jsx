import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({stock, initial, onAdd}) => {
    const [counter, setCounter] = useState(initial);
    const [itemStock, setItemStock] = useState(stock);
    const [itemCart, setItemCart] = useState(0); 

    const incrementarStock = () => {
        if (counter < itemStock) {
            setCounter(counter + 1);
        }
    }

    const decrementarStock = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    }

    const agregarAlCarrito = (counter) => {
        if (counter <= itemStock) {
            setItemStock(itemStock - counter);
            setCounter(itemStock - counter);
            setItemCart(counter);
            onAdd(counter);
        }   
    }

    useEffect(() => {
        setItemStock(stock);
    }, [stock]);

    return(
        <div className="container">
            <div className="row">
                <div className="d-flex justify-content-center">
                    <div className="btn-group text-center" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-outline-secondary" onClick={() => {decrementarStock()}}>-</button>
                        <button type="button" className="btn btn-outline-secondary">{counter}</button>
                        <button type="button" className="btn btn-outline-secondary" onClick={() => {incrementarStock()}}>+</button>
                    </div>
                </div>
                <div className="d-flex justify-content-center py-3">
                    {itemCart === 0 ? <input type="button" className="btn btn-outline-secondary" onClick={()=> {agregarAlCarrito(counter)}} value="Agregar al Carrito" /> : <Link to={"/cart"} className="btn btn-outline-secondary">Finalizar Compra</Link>}
                </div>
            </div>
        </div>
    )
}

export default ItemCount;