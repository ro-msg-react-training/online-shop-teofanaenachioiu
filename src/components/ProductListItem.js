import React from 'react'
import styles from '../styles/ProductListItemStyle.module.css';

function ProductListItem(props) {
    return (
        <div 
            className={styles.productCard} 
            onClick={(e) => props.handleClickItemList(e, props.product)}>
                
            <img
                src={props.product.image}
                alt={props.product.name} />

            <p> {props.product.name} </p>
        </div>
    )
}

export default ProductListItem
