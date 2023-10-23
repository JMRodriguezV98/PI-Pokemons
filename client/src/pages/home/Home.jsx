import React from 'react'
import style from './Home.module.css'
import Cards from '../../components/Cards/Cards'

const Home = () => {

  const allPokemons = [
    {nombre: 'Bulbasaur',types: ['electrico','normal'], imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png' },
    {nombre: 'charmander',types: ['fuego','dragon'], imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png' },
    {nombre: 'snorlax',types: ['normal','hada'], imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png' },
    {nombre: 'snorlax',types: ['normal','hada'], imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png' },
    {nombre: 'snorlax',types: ['normal','hada'], imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png' },
    {nombre: 'snorlax',types: ['normal','hada'], imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png' },
  ]

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