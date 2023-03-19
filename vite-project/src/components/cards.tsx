import React, { Component, Key } from 'react';
import Data from './data.json';
import styles from '../components/cards.module.css';

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
          <div className={styles.container}>
            <div className={styles.row}>
              {Array.from(products).map((product) => (
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
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ProductCards;
