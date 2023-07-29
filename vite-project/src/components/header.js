import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (React.createElement("nav", null,
        React.createElement(Link, { to: "/" }, "Home"),
        React.createElement(Link, { to: "/about" }, "About"),
        React.createElement(Link, { to: "/form" }, "Form")));
};
export default Header;
