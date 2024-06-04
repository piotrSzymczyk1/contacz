import { Container } from "react-bootstrap";
import { Link, useRouteError } from "react-router-dom";

const RouterError = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <Container fluid>
      <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
        <h1>An error has occured</h1>
        <p>{error.statusText || error.message}</p>
        <p>
          <Link to="/">Go to main page</Link>
        </p>
      </div>
    </Container>
  );
};
export default RouterError;
