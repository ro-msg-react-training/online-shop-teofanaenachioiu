import React, { useEffect } from 'react'
import ProductListItem from '../components/ProductListItem'
import { Container, LinearProgress, Grid } from '@material-ui/core'
import Product from '../domain/Product';
import { fetchProducts } from '../redux';
import { connect } from 'react-redux';
import { StyledButton } from '../components/StyledButton';
import { Link } from 'react-router-dom';


function ProductListPage(props: any) {
    useEffect(() => {
        props.fetchProducts()
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
                props.productsInfo.loading ?
                    <LinearProgress /> :
                    props.productsInfo.error ?
                        <p> Products not found </p> :
                        props.productsInfo.products.map((prod: Product) => <ProductListItem
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
