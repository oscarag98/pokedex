import {Link} from 'react-router-dom'; // <= Calling the link component

import classes from './MainNavigation.module.css'    // here we make the call to Module.css that gives style as an object with properties. In this case the object is called: classes

function MainNavigation(){ // on below we use the ClassName attribute and as a dynamic value we place the name of the object . the value we have modified in the module css file.
    return (<header className={classes.header}>   

<div className={classes.logo} >Pokedex</div> 
<nav>

<ul>
    <li>
        <Link to="/">Pokemon cards</Link>
    </li>
    <li>
        <Link to="/PokeFinder">Poke finder</Link>
    </li>
    <li>
        <Link to="/PokemonLookup">Element Lookup</Link>
    </li>
</ul>

</nav>

    </header>
);
    }
export default MainNavigation;
