import React, { Component } from 'react';
import Data from './data.json';
import styles from '../components/cards.module.css';
import Card from './card';
class ProductCardsState {
    products = [];
    errorMessage = '';
}
class ProductCards extends Component {
    constructor(props) {
        super(props);
        this.state = new ProductCardsState();
    }
    componentDidMount() {
        if (Data.length) {
            this.setState({ products: Data });
        }
        else {
            this.setState({ errorMessage: 'Failed to retrieve the list of products.' });
        }
    }
    render() {
        const { products, errorMessage } = this.state;
        return (React.createElement("div", { className: styles.wrap }, errorMessage ? (React.createElement("p", null, errorMessage)) : (React.createElement(React.Fragment, null,
            React.createElement("h2", { className: styles.title_prod }, "Cards"),
            React.createElement("div", { className: styles.container },
                React.createElement("div", { className: styles.row }, products.map((product) => (React.createElement(Card, { key: product.id, product: product })))))))));
    }
}
export default ProductCards;
