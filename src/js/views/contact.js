import React, { useContext, useState, useEffect } from "react";
import "../../styles/home.css";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const Contact = () => {

  const { actions, store } = useContext(Context);
  const {contactId} = useParams();


    const [contact, setContact] = useState(
    {
      "address": "",
      "agenda_slug": "Luisgr10",
      "email": "",
      "full_name": "",
      "id": "",
      "phone": ""
    }
  )

  const handleChange = (e) =>
   {
    e.preventDefault();
    setContact({ ...contact, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (contactId) {
        await actions.modifiContact(contact);
      } else {
        await actions.addContact(contact);
      }
      //toast.success("Contact Created! ");
      setContact({
        full_name: "",
        email: "",
        phone: "",
        address: "",
        agenda_slug: "Luisgr10",
      });
    } catch (error) {
      console.error("Error al guardar el contacto:", error);
    }
  };

  
  return (
    <div className="container mt-5">
      <form className="row g-3 needs-validation border border-1 rounded p-2" noValidate onSubmit={handleSubmit}>
        <div className="col-md-12 position-relative">
          <label htmlFor="validationTooltip03" className="form-label">Full name</label>
          <input type="text" className="form-control" id="validationTooltip03" required value={contact.full_name} onChange={handleChange}/>
          <div className="invalid-tooltip">
          </div>
        </div>
        <div className="col-md-12 position-relative">
          <label htmlFor="validationTooltipUsername" className="form-label" >Email</label>
          <div className="input-group has-validation">
            <span className="input-group-text" id="validationTooltipUsernamePrepend">@</span>
            <input type="text" className="form-control" id="validationTooltipUsername" aria-describedby="validationTooltipUsernamePrepend" required value={contact.email} onChange={handleChange}/>
            <div className="invalid-tooltip">
              Please choose an email.
            </div>
          </div>
        </div>
        <div className="col-md-12 position-relative">
          <label htmlFor="validationTooltip03" className="form-label">Phone</label>
          <input type="text" className="form-control" id="validationTooltip03" required value={contact.phone} onChange={handleChange} />
          <div className="invalid-tooltip">
            Please provide a number.
          </div>
        </div>
        <div className="col-md-12 position-relative">
          <label htmlFor="validationTooltip03" className="form-label">Address</label>
          <input type="text" className="form-control" id="validationTooltip03" required value={contact.address} onChange={handleChange}/>
          <div className="invalid-tooltip">
            Please provide a valid city.
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-success" type="submit" onClick={actions.addContact}>Save</button>
        </div>
      </form>
      <Link to="/">
        <button className="btn btn-success my-3">Back to contacts</button>
      </Link>
    </div >

  );
};