import React from "react";
import { Card} from "react-bootstrap";
import CartWidget from "../CardWidget/CartWidget";
import ItemCount from "../itemCount/itemCount";


function ItemListContainer(
    {
        images,
        title,
        description,
        active,
    }
) {
  const addCarrito = (count) => { 
    <CartWidget cantidad={count} />
  }
  return (
    <div className="pt-5 px-5 mx-auto">
      <Card style={{ width: "18rem" }}>
        {images ? <Card.Img variant="top" src={images} /> :null}
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
          {description}
          </Card.Text>
          {active ? <ItemCount minimo={3} disponibilidad={5} addCarrito={addCarrito} /> : null}
        </Card.Body>
      </Card>
    </div>
  );
}

export default ItemListContainer;
