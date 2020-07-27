import React from 'react'
import ProductListItem from './ProductListItem'
import {Container} from '@material-ui/core'
import products from '../data/products.json'
import Product from '../domain/Product';


function ProductList() {
    function handleClickItemList(e: React.MouseEvent<HTMLDivElement>, product: Product) {
        e.preventDefault();
      }
      
    return (
        <Container>
            <h1>Products</h1>
            {
                products.map(prod => <ProductListItem 
                                                key={prod.id} 
                                                product={prod} 
                                                handleClickItemList={handleClickItemList}/>)
            }
        </Container>
    )
}

export default ProductList
