import React from 'react';
import styles from './PokeCards.module.css'  //Import the styles CSS file . PLEASE use Dynamic expressions xD
import { useEffect, useState } from 'react';
import PokemonThumbnail from '../components/layout/PokemonThumbnail';


function PokeCardsPage() {

  const [allPokemons, setAllPokemons] = useState([])   //variable set as an empty array
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=5')

    
const getAllPokemons =async () =>{

const res = await fetch (loadMore)
const data = await res.json()

setLoadMore(data.next)

function createPokemonObject (result){
result.forEach(async (pokemon) =>{
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`) // looping through the array
  const data= await res.json()
  

  setAllPokemons (currentList => [...currentList, data])
  
})
}
createPokemonObject(data.results)// looping through the array
}

// below useEffect is the same as ComponentDidMount

  useEffect(() => {
    getAllPokemons()
  }, [])

  return (


  <div className={styles.appContainer}>
<h1>Welcome pokemon Trainer</h1>
<h3>Choose your team wisely</h3>
<br/>
<br/>
<div className={styles.pokemonContainer}>

<div className={styles.allContainer}> 


{allPokemons.map((pokemon, index) => <PokemonThumbnail
id={pokemon.id}
name={pokemon.name}
image={pokemon.sprites.front_default}
type={pokemon.types[0].type.name}
key = {index}

/>)}

</div>
<button className={styles.loadMore} onClick={()=> getAllPokemons()}>Load more Pokemons</button>

</div>

  </div>

  
 
 );
}
export default PokeCardsPage;