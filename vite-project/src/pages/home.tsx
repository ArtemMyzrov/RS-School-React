import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../components/search/search';
import SearchResult from '../components/search/search.result';

interface Photo {
  secret: string;
  server: string;
  id: string;
  title: string;
  url: string;
}

const API_KEY = '592524de8e2f7300c220b535be2fbb82';
const API_URL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&format=json&nojsoncallback=1&per_page=10`;

const Search = () => {
  const [query, setQuery] = useState('');
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storedQuery = localStorage.getItem('searchQuery');
    const storedResult = localStorage.getItem('searchResult');
    if (storedQuery && storedResult) {
      setQuery(storedQuery);
      setPhotos(JSON.parse(storedResult));
    }
  }, []);

  const handleSearch = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}&tags=${query}`);
      setPhotos(response.data.photos.photo);
      localStorage.setItem('searchQuery', query);
      localStorage.setItem('searchResult', JSON.stringify(response.data.photos.photo));
    } catch (error) {
      alert('Error data acquisition');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

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
      <SearchBar
        query={query}
        handleSearch={handleSearch}
        setQuery={setQuery}
        handleKeyPress={handleKeyPress}
      />
      <SearchResult
        loading={loading}
        photos={photos}
        setSelectedPhoto={setSelectedPhoto}
        selectedPhoto={selectedPhoto}
        onCloseModal={handleCloseModal}
        handleOverlayClick={handleOverlayClick}
      />
    </div>
  );
};

export default Search;
