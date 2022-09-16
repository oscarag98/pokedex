import classes from './PokemonThumb.module.css'
import React from 'react'

const PokeLookup = ({name, type}) => {

  return (
    <div className={classes.style}>
    <div className={classes.number}>

    </div>
    
<div className={classes.detailWrapper}>
<h3>{name}</h3>
<small>Type: {type}</small>

</div>

    </div>
  )
}

export default PokeLookup
//./PokeCards.module.css
//'./PokemonThumb.module.css'