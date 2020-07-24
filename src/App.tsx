import React, { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import ProductDetails from "./components/ProductDetails";
import products from './data/products.json'
import Product from './domain/Product';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#a01441',
    }
  }
})


function App() {
  const [product, setProduct] = useState(products[0])

  function handleClickItemList(e: React.MouseEvent<HTMLDivElement>, product: Product) {
    e.preventDefault();
    setProduct(product)
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <ProductDetails product={product} />
        <ProductList products={products} handleClickItemList={handleClickItemList}/>
      </ThemeProvider>
    </>
  );
}

export default App;
