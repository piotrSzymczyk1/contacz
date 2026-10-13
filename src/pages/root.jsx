import { Container } from "react-bootstrap";
import ContactsNavbar from "../components/contactsNavbar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <header>
        <ContactsNavbar />
      </header>
      <Container className="mt-3">
        <Outlet />
      </Container>
    </>
  );
};
export default Root;
