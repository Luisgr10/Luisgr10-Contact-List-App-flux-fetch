const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contacts: [], // Inicializa el estado con un array vacío para los contactos
      error: null, // estado para manejar errores
      contacto: {},
    },
    actions: {
      loadContacts: () => {
        // Acción para cargar los contactos desde la API
        fetch("https://playground.4geeks.com/apis/fake/contact/agenda/Luisgr10")
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(response => {
            setStore({ contacts: response }); // Actualiza el estado con los contactos obtenidos
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

        fetch('https://playground.4geeks.com/apis/fake/contact/', options)
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
        const url = "https://playground.4geeks.com/apis/fake/contact/" + id;
        const options = {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json', 'User-Agent': 'insomnia/8.6.1' },

        };

        fetch(url, options)
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

        fetch(`https://playground.4geeks.com/apis/fake/contact/${contacto.id}`, options)
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

