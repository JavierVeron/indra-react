import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import Loading from "../Loading/Loading";

const FinalOrder = ({order}) => {
    const [comentarios, setComentarios] = useState("");

    const actualizarOrden = (id) => {
        const db = getFirestore();
        const orderDoc = doc(db, "orders", id);
        updateDoc(orderDoc, {comments:comentarios}).then(() => {
            console.log("Orden actualizada!");
        });
    }

    return (
        <div>
            <h1>Gracias!</h1>
            <p>Su Orden de Compra es: <b>{order.id}</b></p>
            <table className="table">
                <tbody>
                    <tr>
                        <td className="text-center">Producto</td>
                        <td className="text-center">Cantidad</td>
                        <td className="text-center">Precio</td>
                    </tr>
                    {order.items.map(item => (
                        <tr key={item.id}>
                            <td width={"45%"} className="align-middle">{item.title}</td>
                            <td width={"15%"} className="align-middle text-center">{item.quantity}</td>
                            <td width={"15%"} className="align-middle text-center"><b>€{(item.quantity * item.price).toFixed(2)}</b></td>
                        </tr>
                    ))}
                    <tr>
                        <td className="align-middle text-end" colSpan={2}>Total</td>
                        <td className="align-middle text-center"><b>€{order.total.toFixed(2)}</b></td>
                    </tr>
                    <tr>
                        <td colSpan={3}>Comentarios:</td>
                    </tr>
                    <tr>
                        <td colSpan={3}><textarea className="form-control" onInput={(e) => {setComentarios(e.target.value)}}></textarea></td>
                    </tr>
                    <tr>
                        <td colSpan={3}><button className="btn btn-outline-dark" onClick={() => {actualizarOrden(order.id)}}>Actualizar Orden</button></td>
                    </tr>
                </tbody>
            </table>
            <p>Fecha de Compra: <b>{order.date}</b></p>
        </div>
    )
}

const ThankYou = () => {
    const {id} = useParams();
    const [order, setOrder] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const db = getFirestore();
        const orderDoc = doc(db, "orders", id);
        getDoc(orderDoc).then((response) => {
            if (response.exists()) {
                setOrder({id:response.id, ...response.data()});
                setLoading(false);
            }
        })
    }, [id]);

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    {loading ? <Loading /> : <FinalOrder order={order} />}         
                </div>
            </div>
        </div>
    )
}

export default ThankYou;