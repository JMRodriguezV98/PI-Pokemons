import React, { useEffect } from 'react'
import style from './Home.module.css'
import Cards from '../../components/Cards/Cards'
import { getPokemons } from '../../redux/Actions/actions'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {

  const dispatch = useDispatch();

  const allPokemons = useSelector( (state) => state.allPokemons );

  useEffect( () => {
    dispatch( getPokemons() );
  },[])

  return (
    <>
        <div id={ style.contentPrincipalHome }>
            <Cards allPokemons={ allPokemons }/>
            <footer id={ style.footer }>
              
            </footer>
        </div>
    </>
  )
}

export default Home