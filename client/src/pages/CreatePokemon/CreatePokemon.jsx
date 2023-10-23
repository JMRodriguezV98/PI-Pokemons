import React, { useState } from 'react'
import style from './CreatePokemon.module.css'

const CreatePokemon = () => {
  
  const types = ['electrico','normal','fuego','agua','volador'];
  const [ state,setState ] = useState({
    nombre:'',
    imagen:'',
    vida: 0,
    ataque: 0,
    defensa: 0,
    velocidad: 0,
    altura: 0,
    peso: 0,
    types: []
  })

  const [ errors,setErrors ] = useState({
    nombre: 'Campo Requerido',
    imagen: '',
    vida: '',
    ataque: '',
    defensa: '',
    velocidad: '',
    altura: '',
    peso: '',
    types: ''
  })

  const validate = ( state,name ) => {
    if( name === 'nombre'){
      if( state.nombre === '' ){
        setErrors({
          ...errors, nombre: 'Campo Requerido'
        })
      }else{
        setErrors({
          ...errors,nombre: ''
        })
      }
    }
    if( name === 'imagen'){
      
    }
    if( name === 'vida'){
      
    }
    if( name === 'ataque'){
      
    }
    if( name === 'defensa'){
      
    }
    if( name === 'velocidad'){
      
    }
    if( name === 'altura'){
      
    }
    if( name === 'peso'){
      
    }
    if( name === 'types'){
      
    }
  }

  const disabledFunction = () => {
    let disabledAux = true;
    for( let error in errors ){
      if( errors[error] === '' ){
        disabledAux = false;
      }else{
        disabledAux= true;
        break
      }
    }
    return disabledAux;
  }

  const handleChange = ( event ) => {
    if( event.target.name === 'types'){
      setState({
        ...state,
        types: [...state.types,event.target.value ]
      })
    }else{
      setState({
        ...state,
        [event.target.name]: event.target.value
      })
    }

    validate( {
      ...state,
      [event.target.name]: event.target.value
    }, event.target.name );
  }

  const handleSubmit = ( event ) => {
    event.preventDefault();
    console.log( state );
  }
  
  return (
    <>
      <div id={ style.contentForm }>
        <form onSubmit={ handleSubmit }>
          <label>Nombre:</label>
          <input type="text" name='nombre' onChange={ handleChange }/>
          <div><p>{errors.nombre}</p></div>
          <label>Imagen:</label>
          <input type="text" name='imagen' onChange={ handleChange }/>
          <label>Vida:</label>
          <input type="text" name='vida' onChange={ handleChange }/>
          <label>Ataque:</label>
          <input type="text" name='ataque' onChange={ handleChange }/>
          <label>Defensa:</label>
          <input type="text" name='defensa' onChange={ handleChange }/>
          <label>Velocidad:</label>
          <input type="text" name='velocidad' onChange={ handleChange }/>
          <label>Altura</label>
          <input type="text" name='altura' onChange={ handleChange }/>
          <label>Peso</label>
          <input type="text" name='peso' onChange={ handleChange }/>
          <label>Types:</label>
          <select onChange={ handleChange } name="types" >
            <option hidden>Selecciona el tipo</option>
            { 
              types.map( type => <option key={ type } value={ type }>{ type }</option>)
            }
          </select>
          <input disabled={ disabledFunction() } type="submit" />
        </form>
      </div>
    </>
  )
}

export default CreatePokemon