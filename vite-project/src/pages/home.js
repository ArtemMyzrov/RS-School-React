import React from 'react';
import styles from './home.module.css';
import InputComponent from '../components/search';
import ProductCards from '../components/cards';
const home = () => {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: styles.home },
            React.createElement("h2", null, "Home Page"),
            React.createElement(InputComponent, null),
            React.createElement(ProductCards, null))));
};
export default home;
