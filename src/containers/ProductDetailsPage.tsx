import React, { useEffect, Dispatch } from 'react';
import { Container, LinearProgress, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { 
    deleteProduct, 
    fetchProductDetails, 
    buyProduct
} from '../redux/productDetailsPage/productDetailsActions';
import { connect } from 'react-redux';
import ProductDetails from '../components/ProductDetails';
import Product from '../domain/Product';
import { StyledButton } from '../components/StyledButton';
import { StoreProps } from '../redux/props';


interface Props {
    fetchProductDetails: (id: number) => void,
    buyProduct: (product: Product) => void,
    deleteProduct: (id: number) => void,
    productInfo: {
        loading: boolean,
        product: Product,
        error: boolean,
        deleted: boolean
    },
    match: any
}


function ProductDetailsPage({ fetchProductDetails, buyProduct, deleteProduct, productInfo, match }: Props) {
    const productId = match.params.id

    useEffect(() => {
        fetchProductDetails(productId)
    }, [productId]);

    const addProductToCart = (product: Product) => {
        buyProduct(product)
        alert('Product ' + product.name + ' added to cart!')
    }

    const deleteProductFromList = (id: number) => {
        deleteProduct(id)
    }

    return (
        <Container>
            <Grid container alignItems={"center"}>
                <Grid item xs>
                    <h1>Product details</h1>

                </Grid>
                <Grid item >{
                    productInfo.deleted ?
                        null :
                        <StyledButton onClick={(_) => addProductToCart(productInfo.product)}> Buy </StyledButton>
                }
                </Grid>
            </Grid>

            {
                productInfo.loading ?
                    <LinearProgress /> :

                    productInfo.error ?
                        <p> Product not found </p> :

                        productInfo.deleted ?
                            <p> The product was deleted. Please go
                                <Link to='/products'> back to the list </Link>
                            </p> :

                            <ProductDetails
                                product={productInfo.product}
                                deleteProduct={() => deleteProductFromList(productId)} />
            }
        </Container>
    )
}

const mapStateToProps = ({product}: StoreProps) => {
    return {
        productInfo: product,
    }
}

export default connect(mapStateToProps, { fetchProductDetails, deleteProduct, buyProduct })(ProductDetailsPage)
