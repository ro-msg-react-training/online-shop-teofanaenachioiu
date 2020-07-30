import React from 'react';
import { Typography, Grid, Button, makeStyles } from "@material-ui/core";
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import EditIcon from '@material-ui/icons/Edit'
import { StyledPaper } from './StyledPaper';
import Product from '../domain/Product';
import { Link } from 'react-router-dom';
import { useRouteMatch } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    img: {
        width: '100%',
        height: '100%'
    },
}));


function ProductDetails({ product, deleteProduct }: { product: Product, deleteProduct: any }) {
    const classes = useStyles();
    let match = useRouteMatch();

    return (
        <StyledPaper>
            <Grid container spacing={2}>
                <Grid item>
                    <img
                        className={classes.img}
                        alt={product.name}
                        src={product.image} />
                </Grid>

                <Grid item xs={12} sm container>
                    <Grid item xs sm container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography variant="subtitle1">
                                {product.name}

                            </Typography>
                            <Typography color="textSecondary">
                                {product.description}
                            </Typography>
                        </Grid>

                        <Grid item>
                            <Typography variant="body2" color="textSecondary">
                                Category: {product.category}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid item>
                        <Typography variant="subtitle1">$ {product.price}</Typography>
                    </Grid>
                    
                    <Grid item >
                        <Button color="primary" onClick={() => deleteProduct(product.id)}><DeleteForeverOutlinedIcon /></Button>
                    </Grid>

                    <Grid item >
                        <Link to={`${match.url}/edit`}>
                            <Button color="primary"><EditIcon /></Button>
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </StyledPaper>
    )
}

export default ProductDetails;
