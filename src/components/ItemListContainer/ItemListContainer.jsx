import React, { useEffect, useState } from "react";
import {data} from "../Data/Data.js"
import { ItemList } from "../ItemList/ItemList";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

        useEffect(() => {
            const promesaProductos = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data)
            }, 2000)
            })
        promesaProductos.then((res) => {
            setProductos(res)
        }).catch((err) =>
        console.log(err)
        ).then(() => 
        console.log(data)
        )
    },[])

        return (
            <div className="container">
                {<ItemList listProdutos={productos}/>}
            </div>
        )
}
export default ItemListContainer;