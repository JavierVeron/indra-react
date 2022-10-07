import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../CartContext/CartContext";
import basket from "../images/basket.svg";

const CartWidget = () => {
    const {cartTotal} = useContext(cartContext);

    return (
        <Link to={"/cart"}>
            <button type="button" className="btn btn-light position-relative">
                <img src={basket} alt="Carrito" width={24} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartTotal() > 0 ? cartTotal() : ""}</span>
            </button>
        </Link>
    )
}

export default CartWidget;