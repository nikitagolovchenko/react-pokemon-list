import { POKEMON_MULTIPLE_FAIL, POKEMON_MULTIPLE_LOADING, POKEMON_MULTIPLE_SUCCESS } from "../types";

const initialState = {
  loading: false,
  data: {},
  errorMsg: '',
};

const pokemonMultipleReducer = (state = initialState, action) => {
  switch (action.type) {
    case POKEMON_MULTIPLE_LOADING:
      return {
        ...state,
        loading: true,
        errorMsg: '',
      };

    case POKEMON_MULTIPLE_FAIL:
      return {
        ...state,
        loading: false,
        errorMsg: 'unable to find pokemon',
      };

    case POKEMON_MULTIPLE_SUCCESS:
      return {
        ...state,
        loading: false,
        errorMsg: '',
        data: {
          ...state.data,
          [action.pokemonName]: action.payload, // {pikachu: {abilities: []}, bulbasour: {abilities: []}}
        },
      };
    default:
      return state;
  }
};

export default pokemonMultipleReducer;