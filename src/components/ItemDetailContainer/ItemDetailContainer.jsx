import React, { useEffect, useState } from "react";
import {data} from "../Data/Data.js"
import ItemDetail from "../ItemDetail/ItemDetail.jsx";



const ItemDetailContainer = ({ItemId}) => {
    const [product, setProduct] = useState(null);
    const {ItemId} = useParams()

    const producto = data.find(item => item.id === Number(ItemId))

    const getItem = () => { 
        const getItemPromise =  new Promise((resolve, reject) => {

            resolve(producto)
        })
        getItemPromise.then(res => setProduct(res))
    }
    console.log(producto)
    
    
    useEffect(() => {
      getItem()
    
      return () => {
       
      }
    }, )
    

        return (
        <>
           {product ? <ItemDetail product={product}/> : <h1>Cargando...</h1>}
        </>
      
        )
}
export default ItemDetailContainer;