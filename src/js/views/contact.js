import React, { useContext, useState } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Form from 'react-bootstrap/Form';

export const Contact = () => {
  const { store, actions } = useContext(Context);

  // Estado para almacenar los datos del contacto
  const [contact, setContact] = useState({
    full_name: "",
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
    // Llama a la acción para agregar el contacto
    actions.addContacts(contact);
  };

  return (
    <Form className="container" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>Full name:</Form.Label>
        <Form.Control 
          type="text" 
          name="full_name" // Asegúrate de que el atributo 'name' coincida con las claves del estado 'contact'
          value={contact.full_name}
          onChange={handleChange} // Usa la función 'handleChange' para actualizar el estado
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address:</Form.Label>
        <Form.Control 
          type="email" 
          name="email" // Asegúrate de que el atributo 'name' coincida con las claves del estado 'contact'
          placeholder="name@example.com" 
          value={contact.email}
          onChange={handleChange} // Usa la función 'handleChange' para actualizar el estado
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
        <Form.Label>Phone number:</Form.Label>
        <Form.Control 
          type="number" 
          name="phone" // Asegúrate de que el atributo 'name' coincida con las claves del estado 'contact'
          value={contact.phone}
          onChange={handleChange} // Usa la función 'handleChange' para actualizar el estado
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
        <Form.Label>Address:</Form.Label>
        <Form.Control 
          type="text" 
          name="address" // Asegúrate de que el atributo 'name' coincida con las claves del estado 'contact'
          value={contact.address}
          onChange={handleChange} // Usa la función 'handleChange' para actualizar el estado
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
