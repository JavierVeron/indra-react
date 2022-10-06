import React from "react";
import {Link} from "react-router-dom";
import basket from "../images/basket.svg";

const CartWidget = () => {
    return (
        <Link to={"/cart"}>
            <button type="button" className="btn btn-light position-relative">
                <img src={basket} alt="Carrito" width={24} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0</span>
            </button>
        </Link>
    )
}

export default CartWidget;