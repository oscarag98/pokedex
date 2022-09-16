import {Routes,Route} from 'react-router-dom'; // We're defining components for be able to set route paths (General)
import PokeCards from './pages/PokeCards'; // Define the components (Individual)
import PokemonLookup from './pages/PokemonLookup';
import PokeFinder from './pages/PokeFinder';
import MainNavigation from './components/layout/MainNavigation';


function App() {

return (

<div>

<MainNavigation/>

<Routes>

<Route path="/" element={<PokeCards />} />
<Route path="/PokeFinder" element={<PokeFinder />} />
<Route path="/PokemonLookup" element={<PokemonLookup />} />

</Routes>

</div>);

}

export default App;
