import React from 'react';
import styles from './PokeCards.module.css'  //Import the styles CSS file . PLEASE use Dynamic expressions xD
import { useEffect, useState } from 'react';
import PokeLookup from '../components/layout/PokeLookup';


function PokemonLookup() {

  const [allPokemons, setAllPokemons] = useState([])   //variable set as an empty array
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=150')

    
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
<h1>Sort pokemons By Elements</h1>

<input type="text" placeholder='Write an element here'></input>
<br/>
<table>
  <tr>
    <td><button>Fire</button></td>
    <td><button>Grass</button></td>
    <td><button>Water</button></td>
    <td><button>Bug</button></td>
    <td><button>Rock</button></td>
    <td><button>Fairy</button></td>
    <td><button>Flying</button></td>

  </tr>
</table>

<br/>
<br/>
<div className={styles.pokemonContainer}>

<div className={styles.allContainer}> 


{allPokemons.map((pokemon, index) => <PokeLookup
name={pokemon.name}
type={pokemon.types[0].type.name}

/>)}

</div>
<button className={styles.loadMore} onClick={()=> getAllPokemons()}>Load more Pokemons</button>

</div>

  </div>

  
 
 );
}
export default PokemonLookup;
