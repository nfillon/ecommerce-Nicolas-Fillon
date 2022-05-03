import React, { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

        const data = [
            {
            language_code: "es",
            product_id: 123532,
            name: "Plato de frutas de la estación",
            short_description:
            "Mezcla de diferentes frutas que cambian dependiendo la estación del año",
            presentation:"400g",
            botton: "botton",
            },
            {
            language_code: "es",
            product_id: 123534,
            name: "Cereal",
            short_description: 
                "Mezcla de hojuelas de cereal y plátano",
            presentation:"50g",
            botton: "botton",
            }
        ];

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
        return () => {

        }
        }, [])

        return (
            <div>
                {<ItemList listProdutos={productos}/>}
            </div>
        )
}
export default ItemListContainer;