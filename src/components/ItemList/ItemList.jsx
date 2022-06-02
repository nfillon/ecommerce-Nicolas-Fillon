import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { CartContext } from "../../context/GlobalStateContext";
import Item from "../Item/Item";


export const ItemList = () => {

  const {products} = useContext(CartContext)

  return (
    <>
        <Row className="justify-content-md-center">
        {products.length > 0 ? products.map((productos, key) => (
          <Col  lg="2">  
           <Item
              key={productos.id}
              id={productos.id}
              title={productos.name}
              image={productos.image}
              description={productos.short_description}
              price={productos.price}
              botton={productos.botton}
            />
          </Col>
          )) : <h4>Cargando...</h4>
          }
          </Row>
    </>
  )
}

export default ItemList;
