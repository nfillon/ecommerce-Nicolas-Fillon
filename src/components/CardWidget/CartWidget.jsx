import React, { useContext,  } from "react";
import { Badge, Button, Col, Container, Dropdown, Row } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
// import { BsFillCartCheckFill } from "react-icons/bs";
import { CartContext } from "../../context/GlobalStateContext";
import { Link } from "react-router-dom";
// import { ItemCart } from "../ItemCart/ItemCart";

export const CartWidget = () => {
  
  const { cartItems, deleteItemToCart, productsLength} = useContext(CartContext);

  const total = cartItems.reduce(
    (previous, current) => previous + current.amount * current.price,
    0
  );
  console.log(total);
  return (
    <Dropdown align="end"> 
      <Dropdown.Toggle variant="success">
        <FaShoppingCart color="white" fontSize="25px" />
        <Badge>{productsLength}</Badge>
      </Dropdown.Toggle>
      <Dropdown.Menu style={{ minWidth: 370 }}>
        {cartItems.length > 0 ? (
          <>
            {cartItems.map((prod) => (
              <span className="cartitem" key={prod.id}>
                <Container>
                  <Row>
                    <Col style={{paddingBottom:'1%'}}>
                      <img
                        style={{ width: "100%", height: "auto" , paddingBottom: "1",}}
                        src={prod.image}
                        alt={prod.name}/>
                    </Col>
                    <Col>
                      <span>{prod.name}</span>
                    </Col>
                    <Col>
                      <span>{prod.amount}</span>
                    </Col>
                    <Col>$ {prod.price.split(".")[0]}</Col>
                    <Col><AiFillDelete
                fontSize="20px"
                style={{ cursor: "pointer" }}
                onClick={() => deleteItemToCart(prod)}/></Col>
                  </Row>
                </Container></span>
            ))}
            <Col md={{ span: 8, offset: 8 }} > Total ${total}</Col>
            <Link to="/cart">
            <Button style={{ width: "95%", margin: "0 10px" }}>
              Vamos al Carrito
            </Button>
          </Link>
          </>
        ) : (
          <span style={{ padding: 10 }}>El Carrito esta vacio!</span>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default CartWidget;
