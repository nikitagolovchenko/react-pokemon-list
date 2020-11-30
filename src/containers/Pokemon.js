import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemon } from '../actions/pokemonActions';

const Pokemon = (props) => {
  const pokemonName = props.match.params.pokemon;
  const dispatch = useDispatch();
  const pokemonState = useSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(getPokemon(pokemonName));
  }, []);

  console.log(pokemonName);

  return <div>Pokemon</div>;
};

export default Pokemon;
