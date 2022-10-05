import React from "react";

const ItemDetail = ({item}) => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-2">
                    <img src={item.image} className="img-fluid" alt={item.title} />
                </div>
                <div className="col-md-4">
                    <h3 className="fs-3 text-center">{item.title}</h3>
                    <p className="fs-5 text-center">{item.description}</p>
                    <p className="fw-light text-center"><b>${item.price}</b></p>
                    <p className="fw-light text-center">Stock: {item.stock}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;