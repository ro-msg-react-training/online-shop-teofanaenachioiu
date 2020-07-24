import React, {useState} from 'react';
import './App.css';
import ProductList from './components/ProductList';
import ProductDetails from "./components/ProductDetails";
import products from './data/products.json'
import Product from './domain/Product';

function App() {
  const [product, setProduct] = useState(products[0])

  function handleClickItemList(e: React.MouseEvent<HTMLDivElement>, product: Product){
    e.preventDefault();
    setProduct(product)
  }

  return (
    <>
      <ProductDetails product={product}/>
      <ProductList products={products} handleClickItemList={handleClickItemList}/>
    </>
  );
}

export default App;
