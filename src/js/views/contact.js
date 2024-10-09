import React, { useContext, useState } from "react";
import "../../styles/home.css";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import Form from 'react-bootstrap/Form';

export const Contact = () => {
  const { store, actions } = useContext(Context);
  const [validated, setValidated] = useState();  //Validar el formulario para que esten los datos completos.
  const navigate = useNavigate();

  // Estado para almacenar los datos del contacto
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    agenda_slug: "Luisgr10",
  });

  // Función para manejar cambios en los campos de entrada
  const handleChange = (e) => {
    // Actualiza el estado con el nuevo valor del campo
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

 // Función para manejar el envío del formulario
 const handleSubmit = (e) => {
  e.preventDefault();
  // Verifica si el formulario es válido
  const form = e.currentTarget;
  if (form.checkValidity() === false) {
    // Si no es válido, cambia el estado de validated a true para mostrar los errores
    setValidated(true);
  } else {
    // Si es válido, llama a la acción para agregar el contacto
    actions.addContacts(contact, navigate);
  }
};

  return (
    <Form className="container" validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>Full name:</Form.Label>
        <Form.Control
          required
          type="text"
          name="name"
          value={contact.name}
          onChange={handleChange} // Usa la función 'handleChange' para actualizar el estado
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address:</Form.Label>
        <Form.Control
          required
          type="email"
          name="email"
          placeholder="name@example.com"
          value={contact.email}
          onChange={handleChange} // Usa la función 'handleChange' para actualizar el estado
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
        <Form.Label>Phone number:</Form.Label>
        <Form.Control
          required
          type="tel"
          name="phone"
          value={contact.phone}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
        <Form.Label>Address:</Form.Label>
        <Form.Control
          required
          type="text"
          name="address"
          value={contact.address}
          onChange={handleChange}
        />
      </Form.Group>

      <div className="col-12">
        <button className="btn btn-success" type="submit">
          Save
        </button>
      </div>
      <Link to="/">
        <button className="btn btn-success my-3">Back to contacts</button>
      </Link>
    </Form>
  );
};
