import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {data} from "../Data/Data.js";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";



const ItemDetailContainer = () => {
    
    const {id} = useParams();
    const [productos, setProductos] = useState(null);

    const producFilter = data.find(item => item.id === Number(id))
    
    useEffect(() => {
            const getItemPromise =  new Promise((resolve, reject) => {
                setTimeout(() => {
                resolve(producFilter) 
            }, 2000);
        })
            getItemPromise.then((res) => { 
                setProductos(res)
            }).catch((err) => 
            console.log(err)
            ).then(() => 
            console.log(producFilter)
            ) 
        }, [])
    
        return (
        <>
           {productos ? <ItemDetail productos={productos}/> : <h1>Cargando...</h1>}
        </>
      
        )
}
export default ItemDetailContainer;