import React, { useState } from 'react';
import SearchBar from '../components/search/search';
import SearchResult from '../components/search/search.result';
import Photo from 'redux/features/search/model';

const Search = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const handleCloseModal = () => {
    setSelectedPhoto(null);
  };

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      handleCloseModal();
    }
  };

  return (
    <div>
      <SearchBar />
      <SearchResult
        setSelectedPhoto={setSelectedPhoto}
        selectedPhoto={selectedPhoto}
        onCloseModal={handleCloseModal}
        handleOverlayClick={handleOverlayClick}
      />
    </div>
  );
};

export default Search;
