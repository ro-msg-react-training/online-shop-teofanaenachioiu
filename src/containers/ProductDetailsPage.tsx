import React, { useEffect } from 'react';
import { Container, LinearProgress, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { fetchProduct, fetchDelete, fetchBuy } from '../redux/productDetailsPage/productDetailsActions';
import { connect } from 'react-redux';
import ProductDetails from '../components/ProductDetails';
import Product from '../domain/Product';
import { StyledButton } from '../components/StyledButton';


function ProductDetailsPage(props: any) {
    const params = props.match.params

    useEffect(() => {
        props.fetchProduct(params.id)
    }, [params.id]);

    const addProductToCart = (product: Product) => {
        props.fetchBuyProduct(product)
        alert('Product ' + product.name + ' added to cart!')
    }

    const deleteProduct = (id: number) => {
        props.fetchDeleteProduct(id)
    }

    return (
        <Container>
            <Grid container alignItems={"center"}>
                <Grid item xs>
                    <h1>Product details</h1>

                </Grid>
                <Grid item >
                    <StyledButton onClick={(_) => addProductToCart(props.productInfo.product)}> Buy </StyledButton>
                </Grid>
            </Grid>

            {
                props.productInfo.loading ?
                    <LinearProgress /> :

                    props.productInfo.error ?
                        <p> Product not found </p> :

                        props.productInfo.deleted ?
                            <p> Product was deleted. Please go
                                <Link to='/products'> back to the list </Link>
                            </p> :

                            <ProductDetails
                                product={props.productInfo.product}
                                deleteProduct={deleteProduct} />
            }
        </Container>
    )
}

const mapStateToProps = (state: any) => {
    return {
        productInfo: state.product,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchProduct: (id: number) => dispatch(fetchProduct(id)),
        fetchDeleteProduct: (id: number) => dispatch(fetchDelete(id)),
        fetchBuyProduct: (product: Product) => dispatch(fetchBuy(product)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailsPage)
