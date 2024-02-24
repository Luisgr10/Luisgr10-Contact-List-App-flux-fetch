import React, { Component, useContext, useState } from "react";
import { Home } from "../views/Home";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";
import { Modal, Button } from "react-bootstrap"; // Importa el componente Modal y Button de react-bootstrap

const ContactCard = (props) => {
  console.log("props:");
  console.log(props);
  const { store, actions } = useContext(Context)
  const navigate = useNavigate()

  const [showModal, setShowModal] = useState(false); // Crea un estado para controlar la visibilidad del modal
  const [contactId, setContactId] = useState(null); // Crea un estado para almacenar el id del contacto a borrar

  const handleShowModal = (id) => { //función para mostrar el modal
    setShowModal(true);
    setContactId(id);
  };

  const handleHideModal = () => { //función para ocultar el modal
    setShowModal(false);
  };

  const handleConfirmDelete = () => { //función para confirmar el borrado del contacto
    actions.deleteContact(contactId);
    setShowModal(false);
  };

  return (
    <div className="container d-flex justify-content-center m-4">
      <div className="card mb-3" style={{ maxWidth: '640px', height: '250px' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Google_Contacts_logo.png" className="img-fluid rounded-5 p-4 m-3" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body pt-5">
              <h5 className="card-title"> {props.contacto.full_name} </h5>
              <p className="card-text"><i className="fa-solid fa-location-dot"> {props.contacto.address}</i></p>
              <p className="card-text"><small className="text-body-secondary"><i className="fa-solid fa-phone"> {props.contacto.phone}</i></small></p>
              <p className="card-text"><small className="text-body-secondary"><i className="fa-solid fa-envelope"> {props.contacto.email}</i></small></p>
            </div>

            <div className="d-flex justify-content-end grid gap-2 mx-4">
              <button
                className="rounded-circle  m-1 bg-light border-0"
                onClick={() => {
                  actions.seeContact(props.contacto),
                  navigate("/editContact")
                }}>
                <i className="fa-solid fa-pen"></i>
              </button>

              <button className="rounded-circle  m-1 bg-light border-0"
                onClick={() => handleShowModal(props.contacto.id)}>
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal show={showModal} onHide={handleHideModal}>
        <Modal.Header closeButton>
          <Modal.Title>¿Estás seguro de borrar este contacto?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Estás a punto de borrar el contacto {props.contacto.full_name}. </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleHideModal}>Cancelar</Button>
          <Button variant="danger" onClick={handleConfirmDelete}>Aceptar</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ContactCard
