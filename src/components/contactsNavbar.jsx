import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const ContactsNavbar = () => {
  const location = useLocation();
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>Contactz</Navbar.Brand>
        <Nav className="me-auto align-items-center flex-row">
          {location.pathname !== "/" && (
            <Link to="/" className="nav-link mx-2">
              Contact List
            </Link>
          )}
          {!location.pathname.includes("new") && (
            <Link to="/contacts/new" type="submit" className="nav-link mx-2">
              New contact
            </Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default ContactsNavbar;
