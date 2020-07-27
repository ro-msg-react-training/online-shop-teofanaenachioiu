import React from 'react';
import { useHistory } from "react-router-dom";
import { getProductsFromUserCart, sendUserOrder, clearUserCart, isProductsInUserCart } from '../data/CartService'
import { Container, Grid } from '@material-ui/core';
import UserCartListItem from './UserCartListItem';
import { StyledButton } from './StyledButton';


function UserCart() {
    const history = useHistory();

    function sendOrder() {
        sendUserOrder()
            .then(result => {
                clearUserCart();
                history.goBack();
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <Container>
            <Grid container alignItems={"center"}>
                <Grid item xs>
                    <h1> Shopping Cart </h1>
                </Grid>
                {
                    isProductsInUserCart() ?
                        <Grid>
                            <StyledButton onClick={sendOrder}> Checkout </StyledButton>
                        </Grid> :
                        null
                }
            </Grid>

            {
                isProductsInUserCart() ?
                    <>
                        {
                            getProductsFromUserCart().map(product => <UserCartListItem key={product.id} product={product} />)
                        }
                    </> :
                    <p>There is no items in cart</p>
            }
        </Container>
    )
}

export default UserCart;
