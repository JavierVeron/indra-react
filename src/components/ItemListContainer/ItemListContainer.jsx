import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";

const ItemListContainer = ({greeting}) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const arrayProductos = [
            {id:1, title:"Woman Limited El Corte Inglés", description:"Vestido camisero estampado", price:149, image:"https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202209/02/00160672500695____6__516x640.jpg", stock:10, category:"women"},
            {id:2, title:"Lloyd's", description:"Vestido denim midi con cinturón", price:149, image:"https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202206/17/00119373500453____3__516x640.jpg", stock:9, category:"women"},
            {id:3, title:"Southern Cotton", description:"Vestido largo estampado con volantes", price:69.99, image:"https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202208/29/00111172501758____4__516x640.jpg", stock:10, category:"women"},
            {id:4, title:"Tintoretto", description:"Vestido midi de manga larga", price:69.99, image:"https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202207/29/00129434503974____3__516x640.jpg", stock:7, category:"women"},
            {id:5, title:"Emidio Tucci", description:"Camisa de hombre sport lisa", price:49.95, image:"https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202208/08/00100410707368____4__516x640.jpg", stock:6, category:"men"},
            {id:6, title:"Selected", description:"Camisa de hombre formal sostenible", price:49.99, image:"https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202209/28/00112220201631____6__516x640.jpg", stock:8, category:"men"}
        ];

        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(arrayProductos);
            }, 2000)
        });

        promesa.then((respuesta) => {
            setItems(respuesta);
        })
    }, []);

    return (
        <div className="container">
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer;