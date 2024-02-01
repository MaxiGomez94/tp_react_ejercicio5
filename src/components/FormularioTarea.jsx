import { Button, Form } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState, useEffect } from "react";

const FormularioTarea = () => {
  const [tarea, setTarea] = useState("");
  const [arrayTareas, setArrayTareas] = useState([]);

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(arrayTareas));
  }, [arrayTareas]);

  const handleSubmit = e => {
    e.preventDefault();

    if (tarea.trim() === "") {
      alert("La tarea está vacía");
      return;
    }

    setArrayTareas([...arrayTareas, tarea]);
    setTarea("");
  };

  const borrarTarea = nombreTarea => {
    const arregloFiltrado = arrayTareas.filter(
      elementoTarea => elementoTarea !== nombreTarea
    );
    setArrayTareas(arregloFiltrado);
  };


  return (
    <section className="text-light">
      <Form onSubmit={handleSubmit}>
        <Form.Group
          className="mt-5 mb-5 d-flex me-3"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Control
            type="text"
            placeholder="Ingrese Su Tarea :"
            className="me-2"
            onChange={e => setTarea(e.target.value)}
            value={tarea}
            pattern="^.{5,80}$"
            title="Por favor ingrese entre 5 y 80 caracteres"
          />
          <Button size="active" type="submit">
            Agregar
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas
        arrayTareas={arrayTareas}
        borrarTarea={borrarTarea}
      ></ListaTareas>
    </section>
  );
};

export default FormularioTarea;
