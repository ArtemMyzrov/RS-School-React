import React from 'react';
import styles from '../components/cards.module.css';
const Card = ({ product }) => {
    return (React.createElement("div", { className: "cards", key: product.id },
        React.createElement("div", { className: styles.card },
            React.createElement("img", { className: styles.cardimg, src: product.img, alt: `${product.user_name}, ${product.country}` }),
            React.createElement("h5", { className: "cardtitle" },
                "Author: ",
                product.user_name),
            React.createElement("p", null,
                "Country: ",
                product.country),
            React.createElement("p", null,
                "Contacts: ",
                product.safe_email))));
};
export default Card;
