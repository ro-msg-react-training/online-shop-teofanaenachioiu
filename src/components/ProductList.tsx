import React from 'react'
import ProductListItem from './ProductListItem'
import ProductListProps from '../props/ProductListProps';
import {Container} from '@material-ui/core'

function ProductList(props: ProductListProps) {
    return (
        <Container>
            <h1>Products</h1>
            {
                props.products.map(prod => <ProductListItem 
                                                key={prod.id} 
                                                product={prod} 
                                                handleClickItemList={props.handleClickItemList}/>)
            }
        </Container>
    )
}

export default ProductList
