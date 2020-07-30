import React, { useEffect } from 'react'
import ProductListItem from '../components/ProductListItem'
import { Container, LinearProgress, Grid } from '@material-ui/core'
import Product from '../domain/Product';
import { fetchProducts } from '../redux';
import { connect } from 'react-redux';
import { StyledButton } from '../components/StyledButton';
import { Link } from 'react-router-dom';


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
                    <Link to={`products/new`}>
                        <StyledButton> Add </StyledButton>
                    </Link>
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

const mapStateToProps = (state: any) => {
    return {
        productsInfo: state.products
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchProducts: () => dispatch(fetchProducts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage)
