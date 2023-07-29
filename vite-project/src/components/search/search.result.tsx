import React from 'react';
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
interface SearchResultProps {
  photos: Photo[];
  setSelectedPhoto: React.Dispatch<React.SetStateAction<Photo | null>>;
  selectedPhoto: Photo | null;
  onCloseModal: () => void;
  handleOverlayClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  loading: boolean;
}

const SearchResult = ({
  photos,
  selectedPhoto,
  onCloseModal,
  setSelectedPhoto,
  loading,
  handleOverlayClick,
}: SearchResultProps) => {
  return (
    <div>
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
        onRequestClose={onCloseModal}
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
          <button onClick={onCloseModal}>
            <FaTimesCircle />
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default SearchResult;
