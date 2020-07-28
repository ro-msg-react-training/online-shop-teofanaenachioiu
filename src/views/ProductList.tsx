import React, { useState, useEffect } from 'react'
import ProductListItem from '../components/ProductListItem'
import { Container, LinearProgress } from '@material-ui/core'
import Product from '../domain/Product';
import { getAll } from '../data/ProductService';


function ProductList() {
    const initialProducts = [] as Product[]
    const [products, setProducts] = useState(initialProducts)
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        getAll()
            .then(result => {
                setProducts(result.data)
                setIsLoading(false)
            })
            .catch(err => {
                setIsError(true)
                setIsLoading(false)
            })
    }, []);

    return (
        <Container>
            <h1>Products</h1>
            {
                isLoading ?
                    <LinearProgress /> :
                    isError ?
                        <p> Products not found </p> :
                        products.map(prod => <ProductListItem
                            key={prod.id}
                            product={prod} />)
            }
        </Container>
    )
}

export default ProductList
