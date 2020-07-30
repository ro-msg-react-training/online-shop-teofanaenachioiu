import React, { useEffect } from 'react';
import { Container, Grid, LinearProgress } from '@material-ui/core';
import UserCartListItem from '../components/UserCartListItem';
import { StyledButton } from '../components/StyledButton';
import CartProduct from '../domain/CartProduct';
import { fetchUserCartProducts, sendOrder, updateQuantity } from '../redux/userCartPage/userCartActions';
import { connect } from 'react-redux';


function UserCartPage({ productsInfo, fetchProducts, sendOrder, updateQuantity }: { productsInfo: any, fetchProducts: any, sendOrder: any, updateQuantity: any }) {

    useEffect(() => {
        fetchProducts()
    }, []);

    function handleQuantityChanged(cartProduct: CartProduct, newQuantity: number) {
        cartProduct.quantity = newQuantity;
        updateQuantity(cartProduct);
    }

    return (
        <Container>
            <Grid container alignItems={"center"}>
                <Grid item xs>
                    <h1> Shopping Cart </h1>
                </Grid>
                {
                    productsInfo.cartProducts.length > 0 ?
                        <Grid>
                            <StyledButton onClick={() => sendOrder()}> Checkout </StyledButton>
                        </Grid> :
                        null
                }
            </Grid>

            {
                productsInfo.loading ?
                    <LinearProgress /> :

                    productsInfo.error ?
                        <p> Products not found </p> :

                        productsInfo.cartProducts.length > 0 ?
                            <>
                                {
                                    productsInfo.cartProducts.map((product: any) =>
                                        <UserCartListItem
                                            key={product.productId}
                                            product={product}
                                            handleQuantityChanged={handleQuantityChanged} />)
                                }
                            </> :
                            <p>There is no items in cart</p>
            }
        </Container>
    )
}

const mapStateToProps = (state: any) => {
    return {
        productsInfo: state.userCart
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchProducts: () => dispatch(fetchUserCartProducts()),
        sendOrder: () => dispatch(sendOrder()),
        updateQuantity: (cartProduct: CartProduct) => dispatch(updateQuantity(cartProduct))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserCartPage)
