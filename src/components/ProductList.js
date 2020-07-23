import React from 'react'
import ProductListItem from './ProductListItem'
import stylesList from '../styles/ProductListStyle.module.css';


function ProductList(props) {
    return (
        <div className={stylesList.productList}>
            {
                props.products.map(prod => <ProductListItem 
                                                key={prod.id} 
                                                product={prod} 
                                                handleClickItemList={props.handleClickItemList}/>)
            }
        </div>
    )
}

export default ProductList
