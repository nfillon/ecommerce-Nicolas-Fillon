import React, { useContext, useMemo } from "react";
import { CartContext } from "../../context/GlobalStateContext";

import { Button, Card} from "react-bootstrap";

import { useParams } from "react-router-dom";


function ItemDetail() {
  const { id } = useParams();
  const {products, productsLength} = useContext(CartContext)
  const {deleteItemToCart, addItemToCart} = useContext(CartContext);

  //Filtro la promesa del context
    const [filteredDetails] = useMemo(() => 
    products ? products.filter(detail => detail.id === Number(id)) : [null]
    , [products, id])
  return ( filteredDetails ?

    <Card className="text-center">
          <Card.Body  style={{ width: "40rem" }}>
          <Card.Img variant="top" src={filteredDetails.image} /> 
            <Card.Title>{filteredDetails.name}</Card.Title>
            <Card.Subtitle>{filteredDetails.long_description}</Card.Subtitle>
            <Card.Text  >{filteredDetails.price}</Card.Text>
            <Card.Text>{productsLength}</Card.Text>
            <Button onClick={() => addItemToCart(filteredDetails)}>AGREGAR</Button>
            <Button onClick={() => deleteItemToCart(filteredDetails)}>QUITAR</Button>
          </Card.Body>
      </Card>
     : <h1>Cargando ..... </h1>
  );
}






export default ItemDetail


