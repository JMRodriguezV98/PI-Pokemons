import React from 'react'
import Card from '../Card/Card'
import style from './Cards.module.css'

const Cards = ({allPokemons}) => {
  return (
    <>
        <div id={ style.contentFieldCards } >
          { allPokemons.map( pokemon => 
            <Card  
              key={ pokemon.nombre } 
              nombre={ pokemon.nombre } 
              types={ pokemon.types } 
              image={ pokemon.imagen } 
            />
          )}
        </div>
    </>
  )
}

export default Cards