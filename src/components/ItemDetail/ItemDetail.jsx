import React, { useContext, useMemo } from "react";
import { CartContext } from "../../context/GlobalStateContext";

import {Button, Card} from "react-bootstrap";

// // import ReactDOM from "react-dom";
// import ItemCount from "../ItemCount/ItemCount";
import { useParams } from "react-router-dom";


function ItemDetail({item}) {
  const { id } = useParams();
  const {products} = useContext(CartContext)

  
    const [filteredDetails] = useMemo(() => 
    products ? products.filter(detail => detail.id === Number(id)) : [null]
    , [products, id]);

    const {deleteItemToCart, addItemToCart} = useContext(CartContext);
    // const {idItem} = item;

  return ( filteredDetails ?

    <Card className="text-center">
          <Card.Body  style={{ width: "40rem" }}>
          <Card.Img variant="top" src={filteredDetails.image} /> 
            <Card.Title>{filteredDetails.name}</Card.Title>
            <Card.Subtitle>{filteredDetails.long_description}</Card.Subtitle>
            <Card.Text  >{filteredDetails.price}</Card.Text>
            <Button oneClick={() => addItemToCart(item)}>AGREGAR</Button>
            <Button OnClick={() => deleteItemToCart(item)}>QUITAR</Button>
            {/* {filteredDetails.botton ? <ItemCount minimo={1} disponibilidad={filteredDetails.stock} productoId={filteredDetails} /> : null} */}
          </Card.Body>
          {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
      </Card>
     : <h1>Cargando ..... </h1>
  );
}






export default ItemDetail


