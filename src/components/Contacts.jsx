import React, { useState, useReducer, useEffect } from 'react'
import { ContactosReducer } from '../reducers/ContactosReducer'
import Formularo from './Formularo'
import TableContacts from './TableContacts'

const init = () => {
    const contactos = localStorage.getItem("contactos");
  
    return contactos ? JSON.parse(contactos) : [];
};

const Contacts = () => {
    

  const [state, dispatch] = useReducer(ContactosReducer, [], init);


  useEffect(() => {
    localStorage.setItem("contactos", JSON.stringify(state));
  }, [state]);

  const [formView, setFormView] = useState(false)


    return (
        <div className='container mt-3'>
        <button className='btn btn-success' onClick={() => setFormView(!formView)}>
          {!formView ? "Agregar" : "Contraer"}
        </button>
            {
              formView && <Formularo dispatch={dispatch}/> 
            }
            <TableContacts dispatch={dispatch} contactos={state}/>
        </div>
    )
}

export default Contacts
