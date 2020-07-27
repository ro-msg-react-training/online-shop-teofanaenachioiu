import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Product from '../domain/Product';
import { StyledPaper } from './StyledPaper';


function UserCartListItem(props: {product: Product}) {
    return (
        <>
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
                        {/* To do
                        To add quantity input*/}
                    </Grid>
                </Grid>
            </StyledPaper>
        </>
    )
}

export default UserCartListItem;
