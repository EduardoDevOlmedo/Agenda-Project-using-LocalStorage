import React, { useReducer } from 'react'

const TableContacts = ({contactos = [], dispatch}) => {
    
    const handleDelete = (id) => {
        const deleteAction = {
            type:"delete",
            payload: id
        }

        dispatch(deleteAction)
    }


    return (
        
        <table className='table'>
            <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Númer</th>
                <th>Acción</th>
            </tr>
            </thead>
            <tbody>
                {


                    contactos.map(el => {

                        const finalID = el.id.split("-")

                        return (
                        <tr key={el.id}>
                            <th>{finalID[0]}</th>
                            <th>{el.nombre}</th>
                            <th>{el.numero}</th>
                            <td>
                                <button onClick={() => handleDelete(el.id)} className='btn btn-danger'>Eliminar</button>
                            </td>
                        </tr>   
                        )
                        
                    })
                }
            </tbody>
        </table>
    )
}

export default TableContacts
