import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import products from './data/products.json'

function App() {
  return (
      <ProductList/>
      // <ProductDetails/>
  );
}

export default App;
