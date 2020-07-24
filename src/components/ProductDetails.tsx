import React from 'react'
import ProductDetailsProps from '../props/ProductDetailsProps';
import { Container, Paper, Typography, Grid, Button, makeStyles } from "@material-ui/core"
import ProductList from './ProductList';

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: '20px'
    },
    paper: {
        padding: '20px',
    },
    img: {
        width: '200px'
    },
}));

function ProductDetails(props: ProductDetailsProps) {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <h1>Product details</h1>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item>
                        <img 
                            className={classes.img} 
                            alt={props.product.name} 
                            src={props.product.image} />
                    </Grid>

                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography variant="subtitle1">
                                    {props.product.name}
                                </Typography>
                                <Typography color="textSecondary">
                                    {props.product.description}
                                </Typography>
                            </Grid>
                            
                            <Grid item>
                                <Typography variant="body2" color="textSecondary">
                                    Category: {props.product.category}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid item >
                            <Typography variant="subtitle1">$ {props.product.price}</Typography>
                            <Button color="primary">Details</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    )
}

export default ProductDetails;