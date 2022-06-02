import React from "react";
import { Navbar, Nav, Container, NavDropdown} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import falogo from "../../assets/logofa.png";
import CartWidget from "../CardWidget/CartWidget";
import { Link } from 'react-router-dom';


export default function Navegacion({count}) {
  return (
    <div>
      <Navbar expand={'md'} bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/"><img src={falogo} alt="logo"/></Navbar.Brand>
          <Nav >
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link href="#info">Informacion</Nav.Link>
            <NavDropdown title="Restaurante" id="navbarScrollingDropdown" >
              <NavDropdown.Item href="#roomservices">Room Services</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Resto Mexicano</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Resto Italiano</NavDropdown.Item> 
            </NavDropdown>
            <Nav.Link href="#Menu">menu</Nav.Link>
            <Nav ><CartWidget /></Nav>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
