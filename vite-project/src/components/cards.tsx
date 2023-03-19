import React, { Component, Key } from 'react';
import Data from './data.json';
import styles from '../components/cards.module.css';
import card from './card';
import Card from './card';

class ProductCards extends Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = { products: '', errorMessage: '' };
  }

  componentDidMount() {
    if (Data.length) {
      this.setState({ products: Data });
    } else {
      this.setState({ errorMessage: 'Failed to retrieve the list of products.' });
    }
  }

  render() {
    const { products, errorMessage } = this.state as any;

    return (
      <div className={styles.wrap}>
        {errorMessage ? (
          <p>{errorMessage}</p>
        ) : (
          <>
            <h2 className={styles.title_prod}>Cards</h2>
            <div className={styles.container}>
              <div className={styles.row}>
                {Array.from(products).map((product) => (
                  <Card key={(product as any).id} product={product} />
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
