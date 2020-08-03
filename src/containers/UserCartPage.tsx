import React, { useEffect } from 'react';
import { Container, Grid, LinearProgress } from '@material-ui/core';
import UserCartListItem from '../components/UserCartListItem';
import { StyledButton } from '../components/StyledButton';
import CartProduct from '../domain/CartProduct';
import { fetchCartProducts, sendOrder, updateProductQuantity } from '../redux/userCartPage/userCartActions';
import { connect } from 'react-redux';
import { StoreProps } from '../redux/props';


interface Props { 
    fetchCartProducts: () => void, 
    sendOrder: () => void, 
    updateProductQuantity: (cartProduct: CartProduct) => void
    productsInfo: {
        cartProducts: CartProduct[],
        loading: boolean,
        error: boolean,
    }
}


function UserCartPage({ productsInfo, fetchCartProducts, sendOrder, updateProductQuantity }: Props) {

    useEffect(() => {
        fetchCartProducts()
    }, []);

    function handleQuantityChanged(cartProduct: CartProduct, newQuantity: number) {
        cartProduct.quantity = newQuantity;
        updateProductQuantity(cartProduct);
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

const mapStateToProps = ({userCart}: StoreProps) => {
    return {
        productsInfo: userCart
    }
}

export default connect(mapStateToProps, {fetchCartProducts, updateProductQuantity, sendOrder})(UserCartPage)
