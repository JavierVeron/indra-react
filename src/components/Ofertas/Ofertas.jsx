import React from "react";
import { Link } from "react-router-dom";

const Ofertas = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-6 text-center">
                    <img src="/H18jTqbmGs.jpeg" alt="BACK TO THE SEVENTIES" className="img-fluid" />
                    <h3>BACK TO THE SEVENTIES</h3>
                    <p>Pantalones campana, minifaldas, estampados de cuadros... ¡Las prendas para su look más setentero!</p>
                    <Link className="text-dark fw-bold" to={"/"}>DESCUBRE MÁS</Link>
                </div>
                <div className="col-md-6 text-center">
                    <img src="/SJeRpdb7fo.webp" alt="BACK TO THE SEVENTIES" className="img-fluid" />
                    <h3>-15% DE REGALO</h3>
                    <h3>FERIA DEL BEBÉ</h3>
                    <p>PUERICULTURA, CARROCERÍA Y TEXTIL HOGAR BEBÉS</p>
                    <p>Además, financia tus compras hasta 6 meses sin intereses TAE 3.47% - 12.59%**. Ver condiciones. Del 22 de septiembre al 16 de octubre.</p>
                    <Link className="text-dark fw-bold" to={"/"}>DESCUBRE MÁS</Link>
                </div>
            </div>
        </div>
    )
}

export default Ofertas;