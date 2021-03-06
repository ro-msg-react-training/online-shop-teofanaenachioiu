import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import CartProduct from '../domain/CartProduct';
import { StyledPaper } from './StyledPaper';
import { UpDownInput } from './UpDownInput';


function UserCartListItem(props: { product: CartProduct, handleQuantityChanged: any }) {
    return (
        <StyledPaper>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs>
                    <Typography>
                        {props.product.name}
                    </Typography>
                </Grid>

                <Grid item>
                    <Typography>
                        $ {props.product.price}
                    </Typography>
                    <UpDownInput
                        label="Quantity"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        defaultValue={props.product.quantity}
                        onChange={(e) => props.handleQuantityChanged(props.product, e.target.value)}
                    />
                </Grid>
            </Grid>
        </StyledPaper>
    )
}

export default UserCartListItem;
