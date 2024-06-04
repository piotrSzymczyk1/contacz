import { Button, Navbar, Nav, Container } from "react-bootstrap";
import { Link, Form, useLocation } from "react-router-dom";

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
          <Navbar.Text className="mx-2">
            <Form method="post">
              <Button size="sm" type="submit" variant="success">
                New contact
              </Button>
            </Form>
          </Navbar.Text>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default ContactsNavbar;
