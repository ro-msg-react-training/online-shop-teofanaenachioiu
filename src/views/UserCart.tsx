import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { getProductsFromUserCart, sendUserOrder, clearUserCart, isProductsInUserCart, updateProductFromUserCart } from '../data/CartService'
import { Container, Grid } from '@material-ui/core';
import UserCartListItem from '../components/UserCartListItem';
import { StyledButton } from '../components/StyledButton';
import CartProduct from '../domain/CartProduct';


function UserCart() {
    const history = useHistory();
    const initialValue = [] as CartProduct[];
    const [cartProducts, setCartProducts] = useState(initialValue)
    
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

    useEffect(() => {
        const cart = getProductsFromUserCart()
        setCartProducts(cart)
    }, [cartProducts]);

    function handleQuantityChanged(cartProduct: CartProduct, newQuantity: number) {
        cartProduct.quantity = newQuantity;
        updateProductFromUserCart(cartProduct);
        
        // Set cart products list to an empty list in order to call use effect 
        // which use cartProduct in the dependency list
        setCartProducts([])
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
                            cartProducts.map(product =>
                                <UserCartListItem
                                    key={product.productId}
                                    product={product} 
                                    handleQuantityChanged={handleQuantityChanged}/>)
                        }
                    </> :
                    <p>There is no items in cart</p>
            }
        </Container>
    )
}

export default UserCart;
