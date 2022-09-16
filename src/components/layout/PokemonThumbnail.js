import classes from './PokemonThumb.module.css'
import React from 'react'

const PokemonThumbnail = ({id, name, image, type}) => {

  return (
    <div className={classes.style}>
    <div className={classes.number}>
<small>#0{id}</small>
    </div>
    <img src={image} alt={name}     />
<div className={classes.detailWrapper}>
<h3>{name}</h3>
<small>Type: {type}</small>

</div>

    </div>
  )
}

export default PokemonThumbnail
//./PokeCards.module.css
//'./PokemonThumb.module.css'