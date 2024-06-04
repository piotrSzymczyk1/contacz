import { useLoaderData } from "react-router-dom";
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
      <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4 px-2 g-3">
        {contacts.map((contact) => {
          return (
            <Col key={contact.id}>
              <Card>
                <Card.Body>
                  <Card.Title className="mb-1">{contact.name}</Card.Title>
                  <Card.Subtitle className="mt-2">
                    {contact.email}
                  </Card.Subtitle>
                  {/* <Card.Text>{contact.description}</Card.Text>3 */}
                  <Card.Text className="mt-2">
                    <Button variant="primary" size="sm">
                      Go to details
                    </Button>
                  </Card.Text>
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
