import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import {data} from "../Data/Data"
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
            // <div className="container">
                <Row xs={1} md={4} className="g-4">
                    <Col>
                        {<ItemList listProdutos={productos}/>}
                    </Col>
                </Row>
            // </div>
        )
}
export default ItemListContainer;