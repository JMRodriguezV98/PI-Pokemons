import React from 'react'
import style from './Card.module.css'

const Card = ({ nombre,types,image }) => {
  return (
    <>
      <div className={ style.contentCard }>
        <div className={ style.contentImage }>
          <img src={ image } alt="imagen del pokemon" />
        </div>
        <div className={ style.contentName }>
          <h4>{nombre}</h4>
        </div>
        <div className={ style.contentTypes }>
          <h3>{ types }</h3>
        </div>
      </div>
        {/* <div>
           <img src="" alt={ image } /> 
        </div>
        <div>
            <h4>Nombre: { nombre }</h4>
            <h5>tipos: { types }</h5>
        </div> */}
    </>
  )
}

export default Card