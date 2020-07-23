import React, { Component, Fragment } from 'react'
import products from '../data/products.json'
import ProductListItem from './ProductListItem'
import stylesList from '../styles/ProductListStyle.module.css';


class ProductList extends Component {
    render() {
        return (
            <div className={stylesList.productList}>
                {
                    products.map(prod => <ProductListItem key={prod.id} product ={prod}/>)
                }
            </div>
        )
    }
}

export default ProductList
