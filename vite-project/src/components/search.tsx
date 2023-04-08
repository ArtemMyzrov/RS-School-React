import React, { useState } from 'react';
import axios from 'axios';
import { FaTimesCircle } from 'react-icons/fa';
import Modal from 'react-modal';
import Item from './search.item';
import styles from './search.module.css';

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

  const handleSearch = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}&tags=${query}`);
      setPhotos(response.data.photos.photo);
    } catch {
      alert('Error getting a response');
    }
    setLoading(false);
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
      <div>
        <input
          className={styles.input}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Search"
        />
        <button className={styles.button} onClick={handleSearch}>
          Search
        </button>
      </div>
      {loading ? (
        <div>Progressing...</div>
      ) : (
        <div className={styles.items}>
          {photos.map((photo) => (
            <Item key={photo.id} photo={photo} setSelectedPhoto={setSelectedPhoto} />
          ))}
        </div>
      )}
      <Modal
        className={styles.modal}
        ariaHideApp={false}
        isOpen={selectedPhoto !== null}
        onRequestClose={handleCloseModal}
      >
        <div className={styles.modalOverlay} onClick={handleOverlayClick}>
          {selectedPhoto && (
            <div>
              <img
                src={`https://live.staticflickr.com/${selectedPhoto.server}/${selectedPhoto.id}_${selectedPhoto.secret}_b.jpg`}
                alt={selectedPhoto.title}
              />
              <div>{selectedPhoto.title}</div>
            </div>
          )}
          <button onClick={handleCloseModal}>
            <FaTimesCircle />
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Search;
