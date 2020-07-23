import React, { Component } from 'react'
import products from '../data/products.json'
import productDetailStyle from '../styles/ProductDetailStyle.module.css';

class ProductDetails extends Component {
    constructor(props) {
        super(props)
        this.product = products[0]
    }

    render() {
        return (
            <div className={productDetailStyle.productDetailCard}>
                <div className={productDetailStyle.productHeader}>
                    <h1>{this.product.name}</h1>
                    <div className={productDetailStyle.spacer}></div>
                    <h1>{this.product.price} euro</h1>
                </div>

                <div className={productDetailStyle.productContent}>
                    <img
                        src={this.product.image}
                        alt={this.product.name} />
                        
                    <div className={productDetailStyle.productInfo}>
                        <p>
                            <strong>Description: </strong>
                            {this.product.description}
                        </p>
                        <p>
                            <strong>Category: </strong>
                            {this.product.category}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductDetails
