import React from 'react'
import { Grid, Typography } from "@material-ui/core"
import { useRouteMatch } from "react-router-dom";
import { StyledButton } from './StyledButton';
import { StyledPaper } from './StyledPaper';
import { StyledLink } from './StyledLink';
import Product from '../domain/Product';


function ProductListItem(props: { product: Product }) {
    let match = useRouteMatch();

    return (
        <StyledPaper>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm>
                    <Typography>
                        {props.product.name}
                    </Typography>
                </Grid>

                <Grid item>
                    <Typography>
                        $ {props.product.price}
                    </Typography>
                    <StyledButton>
                        <StyledLink to={`${match.url}/${props.product.id}`}>
                            Details
                            </StyledLink>
                    </StyledButton>
                </Grid>
            </Grid>
        </StyledPaper>
    )
}

export default ProductListItem
