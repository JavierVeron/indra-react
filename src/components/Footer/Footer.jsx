import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-light py-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <p>© 1940-2022 El Corte Inglés S.A. Todos los derechos reservados.</p>
                    </div>
                    <div className="col-md-6">
                        <ul className="nav justify-content-end">
                            <li className="nav-item">
                                <Link className="nav-link text-dark fw-bold text-decoration-none" to={"/"}>Condiciones de uso</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-dark fw-bold text-decoration-none" to={"/"}>Política de privacidad</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-dark fw-bold text-decoration-none" to={"/"}>Política de Cookies</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;