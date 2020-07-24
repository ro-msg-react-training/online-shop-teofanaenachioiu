import React from 'react'
import productDetailStyle from '../styles/ProductDetailStyle.module.css';
import ProductDetailsProps from '../props/ProductDetailsProps';


function ProductDetails(props: ProductDetailsProps) {
    return (
        <div className={productDetailStyle.productDetailCard}>
            <div className={productDetailStyle.productHeader}>
                <h1>{props.product.name}</h1>
                <div className={productDetailStyle.spacer}></div>
                <h1>{props.product.price} euro</h1>
            </div>

            <div className={productDetailStyle.productContent}>
                <img
                    src={props.product.image}
                    alt={props.product.name} />

                <div className={productDetailStyle.productInfo}>
                    <p>
                        <strong>Description: </strong>
                        {props.product.description}
                    </p>
                    <p>
                        <strong>Category: </strong>
                        {props.product.category}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;