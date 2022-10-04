import React from "react";

const ItemListContainer = ({greeting}) => {
    return (
        <div class="alert alert-warning text-center p-5" role="alert">{greeting}</div>
    )
}

export default ItemListContainer;