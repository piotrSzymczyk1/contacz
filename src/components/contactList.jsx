import { useLoaderData, Link, Form } from "react-router-dom";
import { Card } from "react-bootstrap";
import { Row, Button, Col } from "react-bootstrap";

const ContactList = () => {
  const contacts = useLoaderData();
  return (
    <>
      <Row>
        <Col>
          <h1>Contact List</h1>
        </Col>
      </Row>
      <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
        {contacts.map((contact) => {
          return (
            <Col key={contact.id}>
              <Card className="bg-light border-0">
                <Card.Body>
                  <Link to={`/contacts/${contact.id}`} className="text-reset">
                    <Card.Title className="mb-1">{contact.name}</Card.Title>
                  </Link>
                  <Card.Subtitle className="mt-2">
                    {contact.email}
                  </Card.Subtitle>
                  <Row>
                    <Col className="mt-2 d-flex flex-row">
                      <Button variant="warning" size="sm">
                        Edit
                      </Button>
                      <Form
                        method="post"
                        action={`/contacts/${contact.id}/delete`}
                      >
                        <Button
                          type="submit"
                          variant="danger"
                          size="sm"
                          className="mx-2"
                        >
                          Delete
                        </Button>
                      </Form>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
};
export default ContactList;
