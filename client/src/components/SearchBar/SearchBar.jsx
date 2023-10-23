import React from 'react'
import style from './SearchBar.module.css';
import searchIcon from '../../utils/imgs/search.svg';

const SearchBar = () => {
  return (
    <>
        <div id={ style.contentFieldSearch }>
            <input id={ style.inputSearchPokemon } type="text" />
            <div id={ style.contentSVG }>
                <img src={ searchIcon } alt="icono search" />
            </div>
        </div>
    </>
  )
}

export default SearchBar