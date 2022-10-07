import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../CartContext/CartContext";
import cesto from "../images/trash.svg";

const Unidad = ({valor}) => {
    return (
        <div className="mt-1">
            <span className="lead fs-6">€{valor} / Unidad</span>
        </div>
    );
}

const Cart = () => {
    const {cart, cartTotal, cartSum, removeItem, clear} = useContext(cartContext);

    if (cartTotal() === 0) {
        return (
            <div className="container py-5">
                <div className="row">
                    <div className="col">
                        <div className="alert alert-warning text-center" role="alert">No se encontraron productos en el Carrito!</div>
                        <div className="text-center">
                            <Link to={"/"} className="btn btn-outline-secondary">Volver al Inicio</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td className="align-middle text-end" colSpan={5}><Link onClick={() => clear()} className="btn btn-outline-dark">Vaciar Carrito</Link></td>
                            </tr>
                            <tr>
                                <td className="text-center" colSpan={2}>Producto</td>
                                <td className="text-center">Cantidad</td>
                                <td className="text-center">Precio</td>
                                <td>&nbsp;</td>
                            </tr>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td width={"10%"}><img src={item.image} alt={item.id} width={64} /></td>
                                    <td width={"45%"} className="align-middle">{item.title}</td>
                                    <td width={"15%"} className="align-middle text-center">{item.quantity}</td>
                                    <td width={"15%"} className="align-middle text-center"><b>€{item.quantity * item.price}</b> {item.quantity > 1 ? <Unidad valor={item.price} /> : ""}</td>
                                    <td width={"15%"} className="align-middle text-end">
                                        <Link onClick={() => {removeItem(item.id)}} title="Eliminar Producto"><img src={cesto} alt="Eliminar" width={16} /></Link>
                                    </td>
                                </tr>
                            ))}
                            <tr>
                                <td className="align-middle text-end" colSpan={3}>Total</td>
                                <td className="align-middle text-center"><b>€{cartSum().toFixed(2)}</b></td>
                                <td className="align-middle text-end"><Link to={"/checkout"} className="btn btn-outline-dark">Finalizar Compra</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>      
        </div>
    )
}

export default Cart;