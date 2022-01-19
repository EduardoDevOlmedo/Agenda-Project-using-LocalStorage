import React, { useState, useRef } from 'react'
import {v4 as uuid} from "uuid"

const Formularo = ({dispatch}) => {
    
    const [data, setdata] = useState({nombre:"", numero: ""})
    const [error, setError] = useState(false)
    const [nameError, setNameError] = useState(false)
    const inputNumber = useRef(null)
    const addButton = useRef(null)
    const {nombre, numero} = data
   
    const textStyles = {
        color: "red",
        fontWeight: "bold",
        textAlign: "center"
    }

    const handleChange = (e) => {
        setdata(
            {
                ...data, [e.target.name]: e.target.value
            }
        )
        let text = inputNumber.current.value
        if(text.length >= 10){
            setError(!error)
            addButton.current.disabled = true
        }
        else if(text.length < 10){
            setError(false)
            addButton.current.disabled = false
        }
        if( e.target.name === "nombre"){
            let length = e.target.value.length
            if(length < 1){
                setNameError(!nameError)
                addButton.current.disabled = true
            }
            else if(length > 1) {
                setNameError(false)
                addButton.current.disabled = false
            }
        }
    }

    

    const FormError = () => {
        return(
            <p style={textStyles}>Please use only 10 characters max.</p>
        )
        
    }

   
    

    const actionAdd = {
        type: "add",
        payload: {
            id: uuid(),
            nombre: nombre,
            numero: numero,
        }
    }


    const handleAdd = () => {
        dispatch(actionAdd)
    }

    

    const handleSubmit = (e) => {
        e.preventDefault()
    }




    return (

       <>
        <form onSubmit={handleSubmit}  className='container'>
            <label className='mx-1 d-grid gap-2'>
                Nombre: <input onChange={handleChange}  name='nombre' value={nombre} type="text" className="form-control" autoComplete='off'/>
                {
                    nameError && <p style={textStyles}>Name must not be undefined</p>
                }
            </label>
            <label className='mx-1 d-grid gap-2'>
                Numero: <input ref={inputNumber} onChange={handleChange}  name='numero' value={numero} type="number" className="form-control" autoComplete='off'/>
            </label>
            <div className='mx-1 d-grid gap-2 mt-2'>
                <button ref={addButton} onClick={handleAdd} type='submit' className='btn btn-info'>Add</button>
            </div>
            {
                error ? <FormError /> : <></>
            }
        </form>
        </>
    )
}

export default Formularo
