import { useState } from "react";
import Header from "./Components/Header/";
import List from "./Components/List/";
import Create from "./Components/Create";
import { Container } from "react-bootstrap";
function App() {
  const [activities, setActivities] = useState([]); //hook para controlar el estado
  const addActivity = (activity) => {
    //funcion que agrega una tarea
    setActivities([...activities, activity]);
  };
  const deleteActivity = (id) => {
    const newActivities = activities.filter((activity) => activity.id !== id);
    setActivities(newActivities);
  };
  const checkStatus = (state) => {
    state === false ? (state = true) : (state = false);
    console.log(state);
  };

  return (
    <Container fluid>
      <Header />
      <Create addActivity={addActivity} />{" "}
      {/*le mando las props que luego usa Create, props bajan*/}
      <List
        activities={activities}
        /*le paso lo que grabe en mi estado*/
        deleteActivity={deleteActivity}
        checkStatus={checkStatus}
      />
    </Container>
  );
}

export default App;
