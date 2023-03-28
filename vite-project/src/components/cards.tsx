import React, { Component } from 'react';
import Data from './data.json';
import styles from '../components/cards.module.css';
import Card from './card';
import Product from './product.model';

class ProductCardsState {
  products: Product[] = [];
  errorMessage = '';
}

class ProductCards extends Component<object, ProductCardsState> {
  constructor(props: object | Readonly<object>) {
    super(props);

    this.state = new ProductCardsState();
  }

  componentDidMount() {
    if (Data.length) {
      this.setState({ products: Data });
    } else {
      this.setState({ errorMessage: 'Failed to retrieve the list of products.' });
    }
  }

  render() {
    const { products, errorMessage } = this.state;

    return (
      <div className={styles.wrap}>
        {errorMessage ? (
          <p>{errorMessage}</p>
        ) : (
          <>
            <h2 className={styles.title_prod}>Cards</h2>
            <div className={styles.container}>
              <div className={styles.row}>
                {products.map((product) => (
                  <Card key={product.id} product={product} />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default ProductCards;
