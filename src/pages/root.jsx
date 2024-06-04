import { Container } from "react-bootstrap";
import ContactsNavbar from "../components/contactsNavbar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <header>
        <ContactsNavbar />
      </header>
      <section>
        <Container className="mt-3">
          <Outlet />
        </Container>
      </section>
    </>
  );
};
export default Root;
