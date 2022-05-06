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
    
        // useEffect(() => {
        //     const promesaProductos = new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         resolve(data)
        //     }, 2000)
        //     })
        // promesaProductos.then((res) => {
        //     setProductos(res)
        // }).catch((err) =>
        // console.log(err)
        // ).then(() => 
        // console.log(data)
        // )

        // }, [])

        return (
            <div className="container">
                {<ItemList producto={res.data} />}
            </div>
        )
}
export default ItemListContainer;