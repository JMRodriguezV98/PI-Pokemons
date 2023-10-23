import React from 'react'
import style from './Navbar.module.css';
import logo from '../../utils/imgs/logopokemon.png';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';

const Navbar = () => {
  return (
    <>
        <div id={ style.contentNavbar }>
            <div id={ style.contentLogo } >
                <Link to='home' id={ style.logo }>
                    <img  src={ logo } alt="logo de pokemon" />
                </Link>
            </div>
            <div>
                <Link to='create'>
                    <button>
                        Create Pokemon
                    </button>
                </Link>
                <Link to='/'>
                    <button>
                        Exit
                    </button>
                </Link>
            </div>
            <div id={ style.contentSearchBar }>
                <SearchBar />
            </div>
        </div>
    </>
  )
}

export default Navbar