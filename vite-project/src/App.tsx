import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import NotFound from './pages/NotFound';
import Home from './pages/home';
import Header from './components/header';
import Form from './pages/form';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<h1>About</h1>} />
        <Route path="form" element={<Form />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
