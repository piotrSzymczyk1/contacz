import { Button, Col, Row } from "react-bootstrap";
import { useLoaderData, Form, Link, useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const contact = useLoaderData();
  return (
    <>
      <Row>
        <Col>
          <h1>Contact details</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Link onClick={() => navigate(-1)} className="text-reset">
            <h5>
              <i className="bi bi-arrow-left-short"></i> Go back
            </h5>
          </Link>
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
        {contact.notes && (
          <Row>
            <Col>
              <h4>Notes</h4>
              <p className="bg-dark bg-opacity-10 p2 p-3 fs-6 rounded-3 d-flex align-item-center">
                <i
                  className="bi bi-journal d-flex align-items-center"
                  style={{ fontSize: "1.5rem" }}
                ></i>
                <span className="mx-2 fw-semibold d-inline-flex align-items-center text-break">
                  {contact.notes}
                </span>
              </p>
            </Col>
          </Row>
        )}
        <Row>
          <h4>Actions</h4>
          <Col className="mt-1 d-flex align-items-center">
            <Link to={`/contacts/${contact.id}/edit`}>
              <Button variant="warning">Edit</Button>
            </Link>
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
