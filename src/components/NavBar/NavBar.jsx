import React from "react";
import '../../App.css';
import {NavLink, Link} from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import Logo from "../images/el-corte-ingles-logo.png";

const NavBar = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <nav className="navbar navbar-expand-lg bg-light">
                        <div className="container-fluid">
                            <NavLink className="navbar-brand" to={"/"}><img src={Logo} alt="El Corte Inglés" width={150} /></NavLink>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <NavLink activeclassname="page" className="nav-link" to={"/category/women"}>Moda Mujer</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink activeclassname="page" className="nav-link" to={"/category/men"}>Hombre</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <Link activeclassname="page" className="nav-link" to={"/"}>Designers</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="col-md-6 d-flex justify-content-end align-items-center">
                    <CartWidget />
                </div>
            </div>
        </div>
    )
}

export default NavBar;