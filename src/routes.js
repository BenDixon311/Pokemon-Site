import Home from './components/Home.vue';
import Pokemon from './components/Pokemon/Pokemon.vue';
import PokemonDetails from './components/Pokemon/PokemonDetails.vue';



export const routes = [
    { path: '/', component: Home }, { path: '/Pokemon', component: Pokemon }, { path: '/PokemonDetails', component: PokemonDetails } 
]