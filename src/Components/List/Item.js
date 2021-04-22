import { Col, Card, Button } from "react-bootstrap";
import "./item.css";
const Item = ({ id, work, state, deleteActivity, checkStatus }) => {
  const deleteTask = (e) => {
    const { id } = e.target;
    deleteActivity(id);
  };
  const changeStatus = (e) => {
    checkStatus(state);
  };
  return (
    <Col md={3} className="mb-4">
      <Card>
        <Card.Body className="text-center">
          <Card.Title>
            <p className="text-center">Tarea</p>
          </Card.Title>
          <Card.Text>
            <p className="text-center">
              {work}
              <br />
              {state === true ? (
                <p>Cumplido</p>
              ) : (
                <p className="rojo">Incompleto</p>
              )}
            </p>
          </Card.Text>
          <Button className="btn btn-secondary m-1">Añadir 🌟</Button>
          <Button
            id={id}
            className="btn btn-secondary m-1"
            onClick={deleteTask}
          >
            Eliminar
          </Button>
          <Button
            className="btn btn-secondary m-1"
            state={state}
            onClick={changeStatus}
            id={id}
          >
            Completar
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default Item;
