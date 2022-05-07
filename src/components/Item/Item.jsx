import React from "react";
import { Card } from "react-bootstrap";
// import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";

function Item({ id, title, description, image, price }) {
  // const addCarrito = (count) => {
  //   console.log(count);
  // }

  return (
        <Card  className="text-center"
        style={{
          height: "50%",
          padding: "15px",
          borderRadius: "20px",
          boxShadow: "0px 5px 15px 0px rgb(0 0 0 / 20%)"
        }}>
          {image ? <Card.Img variant="top" src={image} /> : null}
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Title>{description}</Card.Title>
            <Card.Subtitle>{price}</Card.Subtitle>
            <div className="align-self-center mx-auto" style={{ width: 80 }}>
              <Link to={`/detail/${id}`}> Detalle </Link>
            </div>
          </Card.Body>
        </Card>
  );
}

export default Item;
