import React, { useEffect, useState } from 'react'
import style from './CreatePokemon.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { getTypes, postPokemon } from '../../redux/Actions/actions';

const CreatePokemon = () => {

  const dispatch = useDispatch();

  const allTypes = useSelector( (state) => state.allTypes )

  useEffect( () => {
    dispatch( getTypes() );
  },[])
  
  const [ state,setState ] = useState({
    name:'',
    image:'',
    hp: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
    type: []
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
    type: ''
  })

  const validate = ( state,name ) => {
    if( name === 'name'){
      if( state.nombre === '' ){
        setErrors({
          ...errors, 
          nombre: 'Campo Requerido'
        })
      }else{
        setErrors({
          ...errors,
          nombre: ''
        })
      }
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
    if( event.target.name === 'type'){
      setState({
        ...state,
        type: [...state.type,event.target.value ]
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
    dispatch( postPokemon( state ) );
  }
  
  return (
    <>
      <div id={ style.contentForm }>
        <form onSubmit={ handleSubmit }>
          <label>Nombre:</label>
          <input type="text" name='name' onChange={ handleChange }/>
          <div>
            <p>
              { errors.nombre }
            </p>
          </div>
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
          <select onChange={ handleChange } name="type" >
            <option hidden>Selecciona el tipo</option>
            { 
              allTypes.map( type => <option key={ type } value={ type }>{ type }</option>)
            }
          </select>
          <div>
            { state.type.map( ( type ) => <span key={ type } >{ type }/</span> ) }
          </div>
          <input disabled={ disabledFunction() } type="submit" />
        </form>
      </div>
    </>
  )
}

export default CreatePokemon