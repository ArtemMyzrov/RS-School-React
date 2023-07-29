import React from 'react';
import styles from '../pages/NotFound.module.css';
function NotFound() {
    return (React.createElement("div", { className: styles.notFound },
        React.createElement("p", null, "404"),
        React.createElement("h2", null, "Sorry,pages Not Found ...")));
}
export default NotFound;
