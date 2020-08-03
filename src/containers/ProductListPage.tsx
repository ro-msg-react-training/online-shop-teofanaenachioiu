import React, { useEffect, Dispatch } from 'react'
import ProductListItem from '../components/ProductListItem'
import { Container, LinearProgress, Grid } from '@material-ui/core'
import Product from '../domain/Product';
import { fetchProducts } from '../redux';
import { connect } from 'react-redux';
import { StyledButton } from '../components/StyledButton';
import { StyledLink } from '../components/StyledLink';
import { StoreProps } from '../redux/props';


interface Props {
    fetchProducts: () => void,
    productsInfo: {
        loading: boolean,
        products: Product[],
        error: boolean,
    }
}


function ProductListPage({ fetchProducts, productsInfo }: Props) {

    useEffect(() => {
        fetchProducts()
    }, []);

    return (
        <Container>
            <Grid container alignItems={"center"}>
                <Grid item xs>
                    <h1>Products</h1>
                </Grid>

                <Grid item >
                    <StyledLink to={`products/new`}>
                        <StyledButton> Add </StyledButton>
                    </StyledLink>
                </Grid>
            </Grid>
            {
                productsInfo.loading ?
                    <LinearProgress /> :
                    
                    productsInfo.error ?
                        <p> Products not found </p> :

                        productsInfo.products.map((prod: Product) =>
                            <ProductListItem
                                key={prod.id}
                                product={prod} />)
            }
        </Container>
    )
}

const mapStateToProps = ({products}: StoreProps) => {
    return {
        productsInfo: products
    }
}

export default connect(mapStateToProps, {fetchProducts})(ProductListPage)
