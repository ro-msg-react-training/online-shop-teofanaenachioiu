import React from 'react'
import { Grid, Typography } from "@material-ui/core"
import { useRouteMatch } from "react-router-dom";
import { StyledButton } from './StyledButton';
import { StyledPaper } from './StyledPaper';
import { StyledLink } from './StyledLink';
import Product from '../domain/Product';


interface Props {
    product: Product
}


function ProductListItem(props: Props) {
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
                    
                    <StyledLink to={`${match.url}/${props.product.id}`}>
                        <StyledButton>
                            Details
                        </StyledButton>
                    </StyledLink>
                </Grid>
            </Grid>
        </StyledPaper>
    )
}

export default ProductListItem
