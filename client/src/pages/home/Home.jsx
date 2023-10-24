import React, { useEffect } from 'react'
import style from './Home.module.css'
import Cards from '../../components/Cards/Cards'
import { filterTypePokemon, getPokemons, getTypes, resetFilter,orderPokemonAction } from '../../redux/Actions/actions'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {

  const dispatch = useDispatch();

  const allPokemons = useSelector( (state) => state.allPokemons );
  const allTypes = useSelector( ( state ) => state.allTypes );
  const filter = useSelector( ( state ) => state.filter );
  const pokemonFiltered = useSelector( ( state ) => state.pokemonFiltered );

  useEffect( () => {
    dispatch( getPokemons() );
    dispatch( getTypes() );
  },[ dispatch ])

  const filterTypes = ( event ) => {
    dispatch( filterTypePokemon( event.target.value ) );
  }

  const resetFilters = () => {
    const filtro = document.getElementById('filterType');
    filtro.value = 'Types';
    dispatch( resetFilter() );
  }

  const orderPokemons = ( event ) => {
    dispatch( orderPokemonAction(event.target.value) );
  }

  return (
    <>
        <div id={ style.contentPrincipalHome }>
            <div>
              <h4>Filtros/Ordenamientos:</h4>
              <select id='filterType' name='types' onChange={ filterTypes } >
                <option hidden>Types</option>
                { allTypes.map( type => <option key={ type } value={ type }>{ type }</option>)}
              </select>
              <select onClick={ orderPokemons } >
                <option hidden >Ordenar</option>
                <option value="AZ">A-Z</option>
                <option value="ZA">Z-A</option>
              </select>
              <button onClick={ resetFilters }>Reset</button>
            </div>
            { (pokemonFiltered.length === 0) && ( filter ) && <div>No hay pokemons con este tipo</div>}
            <Cards allPokemons={ allPokemons } />
            <footer id={ style.footer }>
              
            </footer>
        </div>
    </>
  )
}

export default Home