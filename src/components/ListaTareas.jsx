import { ListGroup } from "react-bootstrap";
import IntemTarea from "./IntemTarea";

const ListaTareas = ({arrayTareas,borrarTarea}) => {
  return (
    <ListGroup className="py-3">
      {
        arrayTareas.map((tarea,posicion)=> <IntemTarea key={posicion} tarea={tarea} borrarTarea={borrarTarea} ></IntemTarea>)
      }
    </ListGroup>
  );
}

export default ListaTareas;