import React, { Component } from "react";
import { Home } from "../views/Home";





const ContactCard = (props) => {
  console.log(props);

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
              <button className="rounded-circle  m-1 bg-light border-0"><i className="fa-solid fa-pen"></i></button>
              <button className="rounded-circle  m-1 bg-light border-0" onClick={}><i className="fa-solid fa-trash"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard