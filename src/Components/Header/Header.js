import { memo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import { Row } from "react-bootstrap";
const Header = memo(() => {
  return (
    <Row>
      <h1 className="text-center title-h1 ">To Do App</h1>
    </Row>
  );
});
export default Header;
