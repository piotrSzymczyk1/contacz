import { Button, Col, Row } from "react-bootstrap";
import { useLoaderData, Form } from "react-router-dom";

const Contact = () => {
  const contact = useLoaderData();
  return (
    <>
      <Row>
        <Col>
          <h1>Contact details</h1>
        </Col>
      </Row>
      <div className="p-5 mb-4 bg-light rounded-3">
        <Row>
          <Col>
            <h4>Name</h4>
            <p className="bg-dark bg-opacity-10 p2 p-3 fs-6 rounded-3 d-flex align-item-center">
              <i
                className="bi bi-person d-flex align-items-center"
                style={{ fontSize: "1.5rem" }}
              ></i>
              <span className="mx-2 fw-semibold d-inline-flex align-items-center">
                {contact.name}
              </span>
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>Email</h4>
            <p className="bg-dark bg-opacity-10 p2 p-3 fs-6 rounded-3 d-flex align-item-center">
              <i
                className="bi bi-envelope d-flex align-items-center"
                style={{ fontSize: "1.5rem" }}
              ></i>
              <a
                href={`mailto:${contact.email}`}
                className="d-inline-flex align-items-center"
              >
                <span className="mx-2 fw-semibold">{contact.email}</span>
              </a>
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>Notes</h4>
            <p className="bg-dark bg-opacity-10 p2 p-3 fs-6 rounded-3 d-flex align-item-center">
              <i
                className="bi bi-journal d-flex align-items-center"
                style={{ fontSize: "1.5rem" }}
              ></i>
              <span className="mx-2 fw-semibold d-inline-flex align-items-center text-break">
                {contact.description}
              </span>
            </p>
          </Col>
        </Row>
        <Row>
          <h4>Actions</h4>
          <Col className="mt-1 d-flex align-items-center">
            <Button variant="warning">Edit</Button>
            <Form method="post" action="delete">
              <Button type="submit" variant="danger" className="mx-2">
                Delete
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default Contact;
