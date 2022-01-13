import React from "react";
import { useState } from "react/cjs/react.development";
import PropTypes from 'prop-types';

export const AddCategory = ( { setCategories } ) => {

  const [inputValue, setInputValue] = useState('')

  // sirve para que, al momento de escribir en el input se pueda setear el valor de este(evento) en el inputValue(valor del hook)
  const handleInputChange = ( event ) => {
    setInputValue(event.target.value)
  };

  const handleSubmit = ( event ) => {
    // para evitar que al hacer submit se recargue la pagina
    event.preventDefault();
    // la forma de pasar parametro al set con cats es para acceder al estado anterior
    if ( inputValue.trim().length > 1 ) {
      setCategories( cats => [inputValue, ...cats])
    }

  }

  return (
    <form onSubmit={ handleSubmit }>
      <input 
        type="text"
        value={ inputValue }
        onChange={(event) => handleInputChange(event)}
      />
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}