import React from "react";
import { useState } from "react";

const ItemCount = ({stock, initial}) => {
    const [counter, setCounter] = useState(initial);

    const incrementarStock = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        }
    }

    const decrementarStock = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    }

    const agregarAlCarrito = (counter) => {
        console.log("Se agregaron: " + counter + " productos en el Carrito!");
    }

    return(
        <div>
            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-primary" onClick={() => {decrementarStock()}}>-</button>
                <button type="button" class="btn btn-primary">{counter}</button>
                <button type="button" class="btn btn-primary" onClick={() => {incrementarStock()}}>+</button>
            </div>
            <div>
                <input type="button" className="btn btn-secondary" onClick={()=> {agregarAlCarrito(counter)}} value="Agregar al Carrito" />
            </div>
        </div>
    )
}

export default ItemCount;