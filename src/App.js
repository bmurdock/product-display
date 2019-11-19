import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import ProductList from './ProductList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Test</h1>
      <ProductList />
    </div>
  );
}

export default App;
