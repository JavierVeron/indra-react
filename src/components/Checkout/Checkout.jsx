import React, { useState, useContext } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Navigate } from "react-router-dom";
import { cartContext } from "../CartContext/CartContext";

const Checkout = () => {
    const {cart, cartSum} = useContext(cartContext);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [direccion, setDireccion] = useState("");
    const [ciudad, setCiudad] = useState("");
    const [orderId, setOrderId] = useState("");

    const setOrder = () => {
        if ((nombre !== "") && (email !== "") && (direccion !== "") && (ciudad !== "")) {
            const buyer = {name:nombre, email:email, telephone:telefono, direction:direccion, city:ciudad};
            const items = [];
            cart.forEach(item => {
                items.push({id:item.id, title:item.title, price:item.price, quantity:item.quantity});
            });
            let fecha = new Date();
            let fecha_actual = `${fecha.getDate()}-${(fecha.getMonth()+1)}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`; 
            const order = {buyer:buyer, items:items, date:fecha_actual, total:cartSum(), comments:""};
            //console.log(order);
            const db = getFirestore();
            const orderCollection = collection(db, "orders");
            addDoc(orderCollection, order).then((response) => {
                setOrderId(response.id);
            });
        }
    }

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-4 offset-md-2">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre:</label>
                            <input type="text" className="form-control" id="nombre" placeholder="Ingrese su Nombre" onInput={(e) => {setNombre(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input type="text" className="form-control" id="email" placeholder="Ingrese su Email" onInput={(e) => {setEmail(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="telefono" className="form-label">Teléfono/Celular:</label>
                            <input type="text" className="form-control" id="nombre" placeholder="Ingrese su Teléfono/Celular" onInput={(e) => {setTelefono(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="direccion" className="form-label">Dirección:</label>
                            <input type="text" className="form-control" id="direccion" placeholder="Ingrese su Dirección" onInput={(e) => {setDireccion(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="ciudad" className="form-label">Ciudad:</label>
                            <input type="text" className="form-control" id="ciudad" placeholder="Ingrese su Ciudad" onInput={(e) => {setCiudad(e.target.value)}} />
                        </div>
                        {orderId ? <Navigate to={"/thankyou/" + orderId} /> : <button type="button" className="btn btn-outline-dark" onClick={() => {setOrder()}}>Finalizar Compra</button>}
                    </form>
                </div>
                <div className="col-md-4">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td className="text-center" colSpan={2}>Producto</td>
                                <td className="text-center">Cantidad</td>
                                <td className="text-center">Precio</td>
                            </tr>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td width={"10%"}><img src={item.image} alt={item.id} width={64} /></td>
                                    <td width={"45%"} className="align-middle">{item.title}</td>
                                    <td width={"15%"} className="align-middle text-center">{item.quantity}</td>
                                    <td width={"15%"} className="align-middle text-center"><b>€{item.quantity * item.price}</b></td>
                                </tr>
                            ))}
                            <tr>
                                <td className="align-middle text-end" colSpan={3}>Total</td>
                                <td className="align-middle text-center"><b>€{cartSum().toFixed(2)}</b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Checkout;