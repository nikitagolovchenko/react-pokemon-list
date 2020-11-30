import { combineReducers } from 'redux';
import pokemonListReducer from './pokemonListReducer';
import pokemonMultipleReducer from './pokemonMultipleReducer';

const rootReducer = combineReducers({
  pokemonList: pokemonListReducer,
  pokemon: pokemonMultipleReducer,
});

export default rootReducer;
