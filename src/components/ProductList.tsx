import React from 'react'
import ProductListItem from './ProductListItem'
import stylesList from '../styles/ProductListStyle.module.css';
import ProductListProps from '../props/ProductListProps';


function ProductList(props: ProductListProps) {
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
