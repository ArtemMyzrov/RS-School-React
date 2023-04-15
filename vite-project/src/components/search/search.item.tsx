import React from 'react';
import Photo from 'redux/features/search/model';
import styles from './search.module.css';

interface Props {
  photo: Photo;
  setSelectedPhoto: (photo: Photo) => void;
}

const Item = ({ photo, setSelectedPhoto }: Props) => {
  return (
    <div className={styles.item} onClick={() => setSelectedPhoto(photo)}>
      <img
        src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`}
        alt={photo.title}
      />
      <div>{photo.title}</div>
    </div>
  );
};

export default Item;
