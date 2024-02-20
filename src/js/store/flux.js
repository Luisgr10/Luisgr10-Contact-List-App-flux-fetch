const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contacts: [], // Inicializa el estado con un array vacío para los contactos
    },
    actions: {
      loadContacts: () => {
        // Acción para cargar los contactos desde la API
        fetch("https://playground.4geeks.com/apis/fake/contact/agenda/Luisgr10")
          .then(response => response.json())
          .then(response => {
            setStore({ contacts: response }); // Actualiza el estado con los contactos obtenidos
          })
          .catch(err => console.log(err)); // Maneja errores de la solicitud
      },
      addContacts: (contact) => {
        const options = {
          method: 'POST',
          headers: {'Content-Type': 'application/json', 'User-Agent': 'insomnia/8.6.1'},
          body: JSON.stringify(contact)
        };
        
        fetch('https://playground.4geeks.com/apis/fake/contact/?=', options)
          .then(response => response.json())
          .then(response => console.log(response))
          .catch(err => console.error(err));
      },
      deleteContact: async (id) => {
        const options = {
          method: 'DELETE',
          headers: {'Content-Type': 'application/json', 'User-Agent': 'insomnia/8.6.1'},
        };
        
        fetch('https://playground.4geeks.com/apis/fake/contact/${id}', options)
          .then(response => response.json())
          .then(response => console.log(response))
          .catch(err => console.error(err));
      };
      
    },
  };
};

export default getState;
