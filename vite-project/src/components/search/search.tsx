import React from 'react';
import styles from './search.module.css';

interface SearchBarProps {
  query: string;
  handleSearch: () => Promise<void>;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  handleKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ query, handleSearch, setQuery }: SearchBarProps) => {
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleButtonClick = () => {
    handleSearch();
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
