import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../components/search/search';
import SearchResult from '../components/search/search.result';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { fetchPhotos } from 'redux/features/search/searchSlice';
import Photo from 'redux/features/search/model';

const Search = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const dispatch = useDispatch();
  const query = useSelector<RootState>((state) => state.search.query);
  const photos = useSelector<RootState>((state) => state.search.photos);
  const loading = useSelector<RootState>((state) => state.search.loading);

  useEffect(() => {
    const storedQuery = localStorage.getItem('searchQuery');
    const storedResult = localStorage.getItem('searchResult');
    if (storedQuery && storedResult) {
      // setQuery(storedQuery);
      // setPhotos(JSON.parse(storedResult));
    }
  }, []);

  const handleCloseModal = () => {
    // setSelectedPhoto(null);
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
