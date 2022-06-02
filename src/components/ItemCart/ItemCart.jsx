import { useContext } from "react";
import { Button, Col, Container, Image, ListGroup, Row } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";


import { CartContext } from "../../context/GlobalStateContext";
import { Form } from "../Form/Form";



const ItemCart = () => {
  const { cartItems,deleteItemToCart} = useContext(CartContext);

  const total = cartItems.reduce(
    (previous, current) => previous + current.amount * current.price,
    0
  );
  return (
    <Container style={{ width: 'auto' }}>
      <Row pt-1 >
        <Col>
        <h4 text-align="center">Listdo de Produrctos</h4>
        <ListGroup>
          {cartItems.map((prod) => (
            <ListGroup.Item key={prod.id}>
              <Row>
                <Col md="auto">
                  <Image style={{ width: '10rem' }} src={prod.image} alt={prod.name} fluid rounded />
                </Col>
                <Col md="auto">
                  <span>{prod.name}</span>
                </Col>
                <Col md="auto">$ {prod.price}</Col>
                <Col md="auto">
                  <Button
                    type="button"
                    variant="light"
                    onClick={() => deleteItemToCart(prod)}>
                    <AiFillDelete fontSize="20px" />
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
        </Col>
   
        <Col>
        <span className="title">Subtotal ({cartItems.length}) items</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: $ {total}</span>
        {<Form total={total}/>}
        {/* <Button style={{ width: "97%"}} type="button" disabled={cartItems.length === 0}>Finalizar compra</Button> */}
        </Col> 
        </Row>
      </Container>
  );
};

export default ItemCart;