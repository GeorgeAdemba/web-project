import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Logo from "../assets/Logo.png";
import "./Header.css";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

function Header() {
  return (
    <Navbar sticky="top" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/Home">
          <img src={Logo} className="logo" alt="logo" />
          Books of East Africa
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Home">Home</Nav.Link>
            {/* <Nav.Link href="#link">Link</Nav.Link> */}
            <NavDropdown title="Search by..." id="basic-nav-dropdown">
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
              <Button href="/Library" variant="outline-success">Search</Button>
            </Form>
          </Nav>
          <Button href="/Account" ><PersonOutlineIcon fontSize="large" /></Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
