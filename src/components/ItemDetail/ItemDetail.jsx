import React from "react";
import {Card} from "react-bootstrap";



function ItemDetail(
    {
      description
    }
) {

  


  return (
    <div className="pt-5 px-5 mx-auto">
          <Card.Text>
          {description}
          </Card.Text>
    </div>
  );
}

export default ItemDetail;
