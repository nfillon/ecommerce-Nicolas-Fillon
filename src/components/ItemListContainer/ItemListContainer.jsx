import React from "react";
import { Card, Button} from "react-bootstrap";
import ItemCount from "../itemCount/itemCount";


function ItemListContainer(
    {
        images,
        title,
        description,
        active,
    }
) {
  return (
    <div className="pt-5 px-5 mx-auto">
      <Card style={{ width: "18rem" }}>
        {images ? <Card.Img variant="top" src={images} /> :null}
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
           {description}
          </Card.Text>
          {active ? <ItemCount/> : null}
        </Card.Body>
      </Card>
    </div>
  );
}

export default ItemListContainer;
