import React from 'react'
import { useState } from 'react'

export const AddCategories = ({onNewCategory}) => {

    const [InputValue, seTInputValue] = useState(''); //hook para manejar el valor del input

    const OnInputChange = (event)=>{
        seTInputValue(event.target.value);
        // console.log(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (InputValue.trim().length <= 1) return; // Evita que guardar valor vacio
        // setCategories( categories => [InputValue,...categories ])
        onNewCategory(InputValue.trim()); //envia el valor al componente padre
        seTInputValue(''); // borrar el valor del campo
    }

    return (
       <form onSubmit={ (event) => onSubmit(event)}>

        <input 
        type="text"
        placeholder='Buscar Gift'
        value={InputValue}
        onChange={(event) => OnInputChange(event)}
            />

       </form>
  )
}
