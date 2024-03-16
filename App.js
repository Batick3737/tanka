import './App.css';
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios';
import { HomePage } from './Components/HomePage';
import { CarsPage } from './Components/CarsPage';

function App() {
  
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/cars/:careId?' element={<CarsPage />} />
      <Route path='*' element={<p>Not Found</p>} />
    </Routes>
  );
}

export default App;
