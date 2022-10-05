import React from "react";

const Item = ({item}) => {
    return (
        <div className="col-md-3 py-3">
            <div className="card">
                <img src={item.image} className="card-img-top" alt={item.title} />
                <div className="card-body">
                    <h5 className="card-title text-center">{item.title}</h5>
                    <p className="card-text text-center">{item.description}</p>
                    <p className="card-text text-center"><b>${item.price}</b></p>
                    <p className="fw-light text-center">Stock: {item.stock}</p>
                </div>
            </div>
        </div>
    )
}

export default Item;