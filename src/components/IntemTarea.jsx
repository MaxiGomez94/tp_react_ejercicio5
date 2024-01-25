import { ListGroup, Button } from "react-bootstrap";

const IntemTarea = ({tarea,borrarTarea}) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      {tarea} <Button variant="danger" onClick={()=> borrarTarea(tarea)}>Eliminar</Button>
    </ListGroup.Item>
  );
};

export default IntemTarea;