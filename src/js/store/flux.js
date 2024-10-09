const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contacts: [], 
      error: null, // estado para manejar errores
      contacto: {},
    },
    actions: {
      loadContacts: () => {
        const options = {method: 'GET', headers: {'User-Agent': 'insomnia/9.2.0'}};
        fetch('https://playground.4geeks.com/contact/agendas/Luisgr10', options)
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            console.log("Respuesta de la API:", data)
            setStore({ contacts: data.contacts });
          })
          .catch(err => {
            console.error('There was a problem with the fetch operation:', err);
            setStore({ error: err.message }); // Maneja errores de la solicitud y actualiza el estado con el mensaje de error
          });
      },

      addContacts: (newContact, navigate) => {
        // Acción para añadir un nuevo contacto a la API
        const options = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'User-Agent': 'insomnia/8.6.1' },
          body: JSON.stringify(newContact)
        };

        fetch('https://playground.4geeks.com/contact/agendas/Luisgr10/contacts', options)
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(response => {
            getActions().loadContacts();
            navigate("/")
            console.log(response);
          })
          .catch(err => {
            console.error('There was a problem with the fetch operation:', err);
          });
      },

      deleteContact: (id) => {
        const options = {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json', 'User-Agent': 'insomnia/8.6.1' },

        };
        fetch(`https://playground.4geeks.com/contact/agendas/Luisgr10/contacts/${id}`, options)

          .then(response => response.json())
          .then(response => {
            getActions().loadContacts()
          })
          .catch(err => console.error(err));
      },

      updateContact: (contacto, navigate) => {
        const options = {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json', 'User-Agent': 'insomnia/8.6.0' },
          body: JSON.stringify(contacto)
        };

        fetch(`https://playground.4geeks.com/contact/agendas/Luisgr10/contacts/${contacto.id}`, options)
          .then(response => response.json())
          .then(response => {
            getActions().loadContacts();
            navigate("/")
          })
          .catch(err => console.error(err));
      },
      seeContact: (contacto) => {
        setStore({ contacto: contacto })
      }
    },
  };
};

export default getState;

