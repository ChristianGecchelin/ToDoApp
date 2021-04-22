import { useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import shortid from "shortid";
import "./Create.css";
const Create = ({ addActivity, checkStatus }) => {
  //le paso como parametro la funcion
  const initialState = {
    id: "",
    work: "",
    state: false,
    //funcion para declarar el estado inicial de los eventos, es un objeto
  };
  const handleWork = (e) => {
    //funcion para escribir un nuevo estado
    const { name, value } = e.target; //destructuro el e.target para no repetirlo
    setWork({
      ...work, //guardo todo el estado previo del evento
      [name]: value, // name es lo que relaciona la funcion con el input, deben llevar el mismo nombre
      //name va entre corchetes porque puede variar en el tiempo. y setteo el value del evento
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault(); //descarto el comportamiento por defecto del submit
    const { work: task } = work; //renombro la variable para no andar repitiendo work.work
    if (task.trim() === "") return; //confirmo que lo que voy a guardar no este vacio
    const workObject = {
      ...work, //guardo lo que habia seteado en mi estado anterior (osea la tarea y el estado)
      id: shortid(), //seteo un nuevo id con la libreria shortid
    };

    setWork(initialState); //limpio el input
    addActivity(workObject); //props suben desde el hijo Create con ese parametro a la funcion addActivity
  };
  const [work, setWork] = useState(initialState); //hook para controlar el estado [getter,setter]

  return (
    <>
      <Container className="mt-3 mb-3">
        <h3 className="text-center">Crear Tarea</h3>
        <Row className="justify/content-center">
          <Form onSubmit={handleSubmit}>
            <Col>
              <Form.Group>
                <Form.Control
                  type="text"
                  name="work"
                  value={work.work}
                  onChange={handleWork}
                  placeholder="Anota la tarea nueva"
                  className="width-input"
                />
              </Form.Group>
            </Col>
            <Col>
              <Button
                variant="secondary"
                className="width-button"
                type="submit"
              >
                Agregar Tarea
              </Button>
            </Col>
          </Form>
        </Row>
      </Container>
    </>
  );
};

export default Create;
