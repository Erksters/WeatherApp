import React from "react";
import "../Header/Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";

const NavigationBar = () => {
  return (
    <>
      <Navbar collapseOnSelect variant="dark" expand="lg">
        <Container>
          <h3
            className="Nav_Bar_Title"
            onClick={() => {
              window.location = "/#/";
            }}
          >
            WeatherApp
          </h3>

          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="Nav_Item_Hover">
              <Nav.Link href="/#/">
                <a id="item" className="Nav_Bar_Items">
                  Home
                </a>
              </Nav.Link>
              <Nav.Link data-cy="reference" href="/#/references">
                <a className="Nav_Bar_Items">References</a>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
