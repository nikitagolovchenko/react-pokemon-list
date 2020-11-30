const {
  POKEMON_LIST_LOADING,
  POKEMON_LIST_FAIL,
  POKEMON_LIST_SUCCESS,
} = require('../types');

const initialState = {
  loading: false,
  data: [],
  errorMsg: '',
  count: 0,
};

const pokemonListReducer = (state = initialState, action) => {
  switch (action.type) {
    case POKEMON_LIST_LOADING:
      return {
        ...state,
        loading: true,
      };

    case POKEMON_LIST_FAIL:
      return {
        ...state,
        loading: false,
        errorMsg: 'unable to get pokemon',
      };

    case POKEMON_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.results,
        errorMsg: '',
        count: action.payload.count,
      };

    default:
      return state;
  }
};

export default pokemonListReducer;
