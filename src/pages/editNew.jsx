import {
  Row,
  Col,
  Button,
  Form as BootstrapForm,
  InputGroup,
} from "react-bootstrap";
import {
  useLoaderData,
  useLocation,
  useNavigate,
  useSubmit,
  Link,
} from "react-router-dom";
import { useState } from "react";
const EditNew = () => {
  const contact = useLoaderData();
  const navigate = useNavigate();
  const location = useLocation();
  const submit = useSubmit();
  const [isValidated, setIsValidated] = useState(false);
  const handleCancelClick = () => {
    if (location.pathname.includes("new")) {
      navigate("/");
    } else {
      navigate(`/contacts/${contact.id}`);
    }
  };
  const handleSubmit = (e) => {
    const form = e.currentTarget;
    const formData = new FormData(e.target);
    if (form.checkValidity()) {
      submit(formData, { method: "post" });
    }
    setIsValidated(true);
    e.preventDefault();
    e.stopPropagation();
  };
  return (
    <>
      <Row>
        <Col>
          <h1>{location.pathname.includes("new") ? "New" : "Edit"} Contact</h1>
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
      <BootstrapForm
        method="post"
        noValidate
        validated={isValidated}
        onSubmit={handleSubmit}
      >
        <div className="p-5 mb-4 bg-light rounded-3">
          <Row>
            <Col>
              <h4>Name</h4>
              <div className="bg-dark bg-opacity-10 p2 p-3 fs-6 rounded-3 d-flex align-item-center">
                <BootstrapForm.Group className="w-100">
                  <InputGroup hasValidation>
                    <InputGroup.Text>
                      <i
                        className="bi bi-person d-flex align-items-center"
                        style={{ fontSize: "1.5rem" }}
                      ></i>
                    </InputGroup.Text>
                    <BootstrapForm.Control
                      type="text"
                      placeholder="Name"
                      required
                      name="name"
                      defaultValue={contact?.name}
                    />
                    <BootstrapForm.Control.Feedback type="invalid">
                      Name has to be filled
                    </BootstrapForm.Control.Feedback>
                  </InputGroup>
                </BootstrapForm.Group>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>Email</h4>
              <div className="bg-dark bg-opacity-10 p2 p-3 fs-6 rounded-3 d-flex align-item-center">
                <BootstrapForm.Group className="w-100">
                  <InputGroup hasValidation>
                    <InputGroup.Text>
                      <i
                        className="bi bi-envelope d-flex align-items-center"
                        style={{ fontSize: "1.5rem" }}
                      ></i>
                    </InputGroup.Text>
                    <BootstrapForm.Control
                      type="email"
                      placeholder="Email"
                      required
                      name="email"
                      defaultValue={contact?.email}
                    />
                    <BootstrapForm.Control.Feedback type="invalid">
                      Email has to be filled
                    </BootstrapForm.Control.Feedback>
                  </InputGroup>
                </BootstrapForm.Group>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>Notes</h4>
              <div className="bg-dark bg-opacity-10 p2 p-3 fs-6 rounded-3 d-flex align-item-center">
                <BootstrapForm.Group className="w-100">
                  <InputGroup hasValidation>
                    <InputGroup.Text>
                      <i
                        className="bi bi-journal d-flex align-items-center"
                        style={{ fontSize: "1.5rem" }}
                      ></i>
                    </InputGroup.Text>
                    <BootstrapForm.Control
                      as="textarea"
                      type="text"
                      placeholder="Notes"
                      name="notes"
                      defaultValue={contact?.notes}
                    />
                  </InputGroup>
                </BootstrapForm.Group>
              </div>
            </Col>
          </Row>
          <Row>
            <h4>Actions</h4>
            <Col className="mt-1 d-flex align-items-center">
              <Button type="submit" variant="success">
                Save
              </Button>
              <Button
                variant="light"
                onClick={handleCancelClick}
                className="mx-2"
              >
                Cancel
              </Button>
            </Col>
          </Row>
        </div>
      </BootstrapForm>
    </>
  );
};
export default EditNew;
