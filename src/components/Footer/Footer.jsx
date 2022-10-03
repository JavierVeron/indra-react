import React from "react";

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
                                <a className="nav-link text-dark fw-bold text-decoration-none" href="#">Condiciones de uso</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark fw-bold text-decoration-none" href="#">Política de privacidad</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark fw-bold text-decoration-none" href="#">Política de Cookies</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;