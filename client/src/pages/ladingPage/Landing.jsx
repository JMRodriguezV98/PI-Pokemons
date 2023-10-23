import React from 'react'
import logo from '../../utils/imgs/logopokemon.png';
import charizard from '../../utils/imgs/charizard.png';
import decoration from '../../utils/imgs/decoration.png';
import styles from './lading.module.css';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <>
        <div className={ styles.contentPrincipal }>
            <div className={ styles.contents }>
              <div id={ styles.contentDecorationSecond }>
                <img className={ styles.pokeDecoration_second } src={ decoration } alt="imagen decoracion" />
              </div>
            </div>
            <div className={ styles.contents }>
              <div id={ styles.contentImgs }>
                <div id={ styles.contentLogo }>
                  <img id={ styles.logo } src={ logo } alt="Logo pokemon" />
                </div>
                <div id={ styles.contentCharizard }>
                  <img id={ styles.charizard } src={ charizard } alt="pokemon charizard" />
                </div>
                <div id={ styles.contentButton }>
                  <Link to='home'>
                    <button id={ styles.loginButton }>ENTRAR</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className={ styles.contents }>
              <div id={ styles.contentDecoration }>
                <img className={ styles.pokeDecoration } src={ decoration } alt="imagen decoracion" />
                <img className={ styles.pokeDecoration } src={ decoration } alt="imagen decoracion" />
              </div>
            </div>
        </div>
    </>
  )
}

export default Landing