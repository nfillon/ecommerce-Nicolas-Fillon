import React, { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import axios from "axios";


const ItemListContainer = () => {
    const [] = useState([]);

        const obtenerProductos = async () =>{

        try {

            const res = await axios.get("https://posadas.api.cloud1-contactless.com/api/public/products/by-catalog/6632?acronym=fgpu")
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }

        };

        useEffect(() => {
            obtenerProductos()
            return () => {}
        }, [])

        return (
            <div className="container">
                {<ItemList producto={res.data} />}
            </div>
        )
}
export default ItemListContainer;