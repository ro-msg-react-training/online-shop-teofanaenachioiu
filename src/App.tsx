import React, {useState} from 'react';
import './App.css';
import ProductList from './components/ProductList';
import ProductDetails from "./components/ProductDetails.js";
import products from './data/products.json'

function App() {
  const [product, setProduct] = useState(products[0])

  function handleClickItemList(e: any, clickedProduct: any){
    e.preventDefault();
    setProduct(clickedProduct)
  }

  return (
    <>
      <ProductDetails product={product}/>
      <ProductList products={products} handleClickItemList={handleClickItemList}/>
    </>
  );
}

export default App;
