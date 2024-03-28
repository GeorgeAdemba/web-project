import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Logo from "./assets/Logo.png";
import "./Header.css";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

function Header() {
  return (
    <Navbar sticky="top" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo} className="logo" alt="logo" />
          Books of East Africa
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Search by..." id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Genre</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Author</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Price</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
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
              <Button variant="outline-success">Search</Button>
            </Form>
          </Nav>
          <Button id="account">Account</Button>
          <PersonOutlineIcon fontSize="large" />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
