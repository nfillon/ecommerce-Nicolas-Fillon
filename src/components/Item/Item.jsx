import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";


function Item({id, title, description, image, price}) {

  
  // const addCarrito = (count) => {
  //   console.log(count);
  // }

  return (
      <Card  className="p-2, text-center, xs-card, md-card"
        style={{ 
          width: "50%",
          height: "75%",
          padding: "15px",
          borderRadius: "20px",
          boxShadow: "0px 5px 15px 0px rgb(0 0 0 / 20%)"
        }}>
          {image ? <Card.Img variant="top" src={image}/> : null}
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
