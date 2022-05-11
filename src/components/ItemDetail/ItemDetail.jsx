import React from "react";
import {Card} from "react-bootstrap";
// import ReactDOM from "react-dom";
import ItemCount from "../ItemCount/ItemCount";


function ItemDetail(
    {
      productos
    }
) {

  const addCarrito = (count) => { 
    console.log(count);
  }
  
  return (
<Card className="text-center">
  
  <Card.Body  style={{ width: "40rem" }}>
  <Card.Img variant="top" src={productos.image} /> 
    <Card.Title>{productos.name}</Card.Title>
    <Card.Subtitle>{productos.long_description}</Card.Subtitle>
    <Card.Text  >{productos.price}</Card.Text>
    {productos.botton ? <ItemCount minimo={1} disponibilidad={10} addCarrito={addCarrito} /> : null}
  </Card.Body>
  <Card.Footer className="text-muted">2 days ago</Card.Footer>
</Card>
  );
}

export default ItemDetail;
