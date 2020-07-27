import React from 'react';
import { getProducts } from '../data/CartService'
import { Container } from '@material-ui/core';

function UserCart() {
    return (
        <Container>
            <h1>Shopping Cart</h1>
            <ul>
                {
                    getProducts().map(product => <li>{product.name}</li>)
                }
            </ul>
        </Container>
    )
}

export default UserCart;
