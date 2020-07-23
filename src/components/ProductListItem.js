import React, { Component, Fragment } from 'react'
import styles from '../styles/ProductListItemStyle.module.css';

class ProductListItem extends Component {
    render() {
        return (
            <div className={styles.productCard}>
                <img
                    src={this.props.product.image}
                    alt={this.props.product.name} />

                <p> {this.props.product.name} </p>
            </div>
        )
    }
}

export default ProductListItem
