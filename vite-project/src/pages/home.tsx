import React from 'react';
import styles from './home.module.css';
import InputComponent from '../components/search';
import ProductCards from '../components/cards';

const home = () => {
  return (
    <>
      <div className={styles.home}>
        <h2>Home Page</h2>
        <InputComponent />
        <ProductCards />
      </div>
    </>
  );
};

export default home;
