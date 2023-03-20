import React from 'react';
import styles from '../components/cards.module.css';
import Product from './product.model';

const Card = ({ product }: { product: Product }) => {
  return (
    <div className="cards" key={product.id}>
      <div className={styles.card}>
        <img
          className={styles.cardimg}
          src={product.img}
          alt={`${product.user_name}, ${product.country}`}
        />
        <h5 className="cardtitle">Author: {product.user_name}</h5>
        <p>Country: {product.country}</p>
        <p>Contacts: {product.safe_email}</p>
      </div>
    </div>
  );
};

export default Card;
