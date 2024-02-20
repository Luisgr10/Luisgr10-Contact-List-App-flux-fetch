import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";
import { Navbar } from "../component/navbar";
import ContactCard from "../component/contactCard";

export const Home = () => {
	const { actions, store } = useContext(Context)

	
	return (
		<div className="container">
			{
				store.contacts.map((contact, index)=> {
					return (<ContactCard key={index} contacto = {contact}/>)
				})
			}
			
		</div>
	);
};
