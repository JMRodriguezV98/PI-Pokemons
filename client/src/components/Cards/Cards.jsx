import React from 'react'
import Card from '../Card/Card'
import style from './Cards.module.css'

const Cards = ( {allPokemons} ) => {
  return (
    <>
        <div id={ style.contentFieldCards } >
          { allPokemons.map( pokemon => 
            <Card  
              key={ pokemon.id } 
              nombre={ pokemon.name } 
              types={ pokemon.types } 
              image={ pokemon.image } 
            />
          )}
        </div>
    </>
  )
}

export default Cards