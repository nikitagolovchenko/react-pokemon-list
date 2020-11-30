import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { v4 as uuid } from 'uuid';
import { getPokemonList } from '../actions/pokemonActions';
import { Link } from 'react-router-dom';

const PokemonList = () => {
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.pokemonList);

  useEffect(() => {
    fetchData(1);
  }, []);

  const fetchData = (page = 1) => {
    dispatch(getPokemonList(page));
  };

  const showData = () => {
    if (!_.isEmpty(pokemonList.data)) {
      return (
        <div className='list-wrapper'>
          {pokemonList.data.map((el) => {
            return (
              <div className='pokemon-item' key={uuid()}>
                <p>{el.name}</p>
                <Link to={`/pokemon/${el.name}`}>View</Link>
              </div>
            );
          })}
        </div>
      );
    }

    if (pokemonList.loading) {
      return <p>Loading...</p>;
    }

    if (pokemonList.errorMsg !== '') {
      return <p>{pokemonList.errorMsg}</p>;
    }

    return <p>unable to get data</p>;
  };

  return <div>{showData()}</div>;
};

export default PokemonList;
