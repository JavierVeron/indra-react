import React from "react";
import { Link } from "react-router-dom";

const Item = ({item}) => {
    return (
        <div className="col-md-3 py-3">
            <Link to={`/item/${item.id}`} className="text-decoration-none text-dark">
                <div className="card">
                    <img src={item.image} className="card-img-top" alt={item.title} />
                    <div className="card-body">
                        <h5 className="card-title text-center">{item.title}</h5>
                        <p className="card-text text-center">{item.description}</p>
                        <p className="card-text text-center"><b>${item.price}</b></p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Item;