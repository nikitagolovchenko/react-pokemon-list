import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { v4 as uuid } from 'uuid';
import { getPokemonList } from '../actions/pokemonActions';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

const PokemonList = (props) => {
  const [search, setSearch] = useState('');
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

    if (pokemonList.errorMsg !== '') {
      return <p>{pokemonList.errorMsg}</p>;
    }

    return <p>unable to get data</p>;
  };

  return (
    <div>
      <form
        className='search-wrapper'
        onSubmit={(e) => {
          e.preventDefault();
          props.history.push(`/pokemon/${search}`);
        }}
      >
        <p>Search: </p>
        <input type='text' onChange={(e) => setSearch(e.target.value)} />
        <button type='submit'>Search</button>
      </form>
      {showData()}
      {!_.isEmpty(pokemonList.data) && (
        <ReactPaginate
          pageCount={Math.ceil(pokemonList.count / 15)}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          containerClassName="pagination"
          onPageChange={(data) => fetchData(data.selected + 1)}
        />
      )}
    </div>
  );
};

export default PokemonList;
