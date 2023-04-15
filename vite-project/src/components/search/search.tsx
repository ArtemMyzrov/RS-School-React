import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPhotos, setQuerys } from '../../redux/features/search/searchSlice';
import { AppDispatch, RootState } from '../../redux/store';
import styles from './search.module.css';

// interface SearchBarProps {
//   query: string;
//   handleSearch: () => Promise<void>;
//   setQuery: React.Dispatch<React.SetStateAction<string>>;
//   handleKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
// }

const SearchBar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [query, setQuery] = useState<string>('');
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      // handleSearch();
      dispatch(fetchPhotos(query));
      dispatch(setQuerys(query));
    }
  };

  const handleButtonClick = () => {
    dispatch(fetchPhotos(query));
  };

  return (
    <div>
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
