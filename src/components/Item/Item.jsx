import React from "react";
import {Card} from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";


function Item(
    {
      id, title, description, image, botton
    }
) {
  const addCarrito = (count) => { 
    console.log(count);
  }

  return (
    <div className="pt-5 px-5 mx-auto">
      <Card style={{ width: "18rem" }}>
        {image ? <Card.Img variant="top" src={image} /> :null}
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Title>{description}</Card.Title>
          <div className="align-self-center mx-auto" style={{width: 80}}>
              <Link to={`/detail/${id}`}> Detalle </Link>
          </div>
          {botton ? <ItemCount minimo={1} disponibilidad={10} addCarrito={addCarrito} /> : null}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Item;
