import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotos, setQuerys } from '../../redux/features/search/searchSlice';
import { AppDispatch, RootState } from '../../redux/store';
import styles from './search.module.css';

const SearchBar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const querySelector = useSelector<RootState, string>((state) => state.search.query);
  const [query, setQuery] = useState<string>(querySelector);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      dispatch(fetchPhotos(query));
      dispatch(setQuerys(query));
    }
  };

  const handleButtonClick = () => {
    dispatch(fetchPhotos(query));
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <input
        className={styles.input}
        placeholder="Search"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button className={styles.button} onClick={handleButtonClick}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
