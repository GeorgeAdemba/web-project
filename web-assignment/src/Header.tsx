// import Logo from "./assets/Logo.png";
// import "./Header.css"
// function Header() {
//   return (
//     <header className='header-items'>
//       <ul>
//         <a className="logo" href="#">
//           <img src={Logo} alt="logo" />
//         </a>
//       </ul>
//       <ul>
//         <input type="text" aria-label="Search" id="search" />
//       </ul>
//       <ul>
//         <a href="#">Home</a>
//       </ul>
//       <ul>
//         <a href="#">Account</a>
//       </ul>
//       <ul>
//         <a href="#">About</a>
//       </ul>
//     </header>
//   );
// }

// export default Header;

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Logo from "./assets/Logo.png";
import "./Header.css";

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
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
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
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
          <Button id="account">Account</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
