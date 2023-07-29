import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import NotFound from './pages/NotFound';
import Home from './pages/home';
import Header from './components/header';
import Form from './pages/form';
function App() {
    return (React.createElement(BrowserRouter, null,
        React.createElement(Header, null),
        React.createElement(Routes, null,
            React.createElement(Route, { path: "/", element: React.createElement(Home, null) }),
            React.createElement(Route, { path: "about", element: React.createElement("h1", null, "About") }),
            React.createElement(Route, { path: "form", element: React.createElement(Form, null) }),
            React.createElement(Route, { path: "*", element: React.createElement(NotFound, null) }))));
}
export default App;
