import React from 'react';
import styles from '../components/cards.module.css';

const Card = ({ product }: any) => {
  return (
    <div className="cards" key={(product as any).id}>
      <div className={styles.card}>
        <img
          className={styles.cardimg}
          src={(product as any).img}
          alt={`${(product as any).user_name}, ${(product as any).country}`}
        />
        <h5 className="cardtitle">Author: {(product as any).user_name}</h5>
        <p>Country: {(product as any).country}</p>
        <p>Contacts: {(product as any).safe_email}</p>
      </div>
    </div>
  );
};

export default Card;
