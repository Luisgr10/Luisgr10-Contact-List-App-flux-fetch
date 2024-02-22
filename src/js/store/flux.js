const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contacts: [], // Inicializa el estado con un array vacío para los contactos
      error: null, // Añade un estado para manejar errores
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
      addContacts: (newContact) => {
        // Acción para añadir un nuevo contacto a la API
        const options = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'User-Agent': 'insomnia/8.6.1' },
          body: JSON.stringify(newContact) // Asegúrate de pasar los datos del nuevo contacto como un objeto JSON
        };

        fetch('https://playground.4geeks.com/apis/fake/contact/', options)
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(response => {
            console.log(response);
            // Aquí podrías actualizar el estado con el nuevo contacto si es necesario
          })
          .catch(err => {
            console.error('There was a problem with the fetch operation:', err);
            // Aquí podrías actualizar el estado con el error si es necesario
          });
      },
      
    },
  };
};

export default getState;

