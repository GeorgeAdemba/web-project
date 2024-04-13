import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Logo from "../assets/Logo.png";
import "./Header.css";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Header() {
  return (
    <Navbar sticky="top" expand="lg" className="bg-body-tertiary">
      <Container className="con">
        <Navbar.Brand className="brand" href="/Home">
          <img src={Logo} className="logo" alt="logo" />
          Books of East Africa
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Home" className="homeword">
              Home
            </Nav.Link>
            <NavDropdown
              title="Search by..."
              id="basic-nav-dropdown"
              className="searchby"
            >
              <NavDropdown.Item href="/Library">Genre</NavDropdown.Item>
              <NavDropdown.Item href="/Library">Author</NavDropdown.Item>
              <NavDropdown.Item href="/Library">Price</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Library">
                All books(Library)
              </NavDropdown.Item>
            </NavDropdown>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button href="#" variant="outline-success">
                Search
              </Button>
            </Form>
          </Nav>

          <Button className="cartbutton" href="/Cart">
            <ShoppingCartIcon fontSize="large" />
          </Button>

          <Button
            className="accountbutton"
            href="/Account"
            style={{ backgroundColor: "green", borderColor: "green" }}
          >
            <PersonOutlineIcon fontSize="large" />
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
