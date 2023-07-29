import { Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import NotFound from './pages/NotFound';
import Home from './pages/home';
import Header from './components/header';
import Form from './pages/form';

import { createStore } from './redux/store';
import { Provider } from 'react-redux';

const store = createStore();

export const Router = () => {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/form" element={<Form />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Provider>
    </div>
  );
};
