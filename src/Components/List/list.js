import Item from "./Item";
import { Row, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./list.css";

const List = ({ activities, deleteActivity, checkStatus }) => {
  return (
    <>
      <Container fluid>
        <Row className="justify-content-center">
          {activities.length === 0 ? (
            <h4 className="text-center">No hay tareas</h4>
          ) : null}
          {activities.map((item) => (
            <Item
              key={item.id}
              {...item}
              deleteActivity={deleteActivity}
              checkStatus={checkStatus}
            />
          ))}
        </Row>
      </Container>
    </>
  );
};
export default List;
