import React from "react";
import {Card} from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";


function Item(
    {
      title, description, presentation, botton, images
    }
) {
  const addCarrito = (count) => { 
    console.log(count);
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
          <Card.Text>
          {presentation}
          </Card.Text>
          {botton ? <ItemCount minimo={1} disponibilidad={10} addCarrito={addCarrito} /> : null}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Item;
