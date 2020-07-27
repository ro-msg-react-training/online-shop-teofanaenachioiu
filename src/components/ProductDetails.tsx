import React from 'react'
import { Container, Paper, Typography, Grid, Button, makeStyles } from "@material-ui/core"
import { RouteComponentProps } from "react-router-dom";
import {findById} from '../data/ProductService'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { addProduct } from '../data/CartService'
import Product from '../domain/Product';

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

function ProductDetails(props: RouteComponentProps<any>) {
    const classes = useStyles();
    const params = props.match.params
    const product = findById(params.id) as Product

    function addProductToCart() {
        addProduct(product)
        alert('Product '+ product.name+ ' added to cart!')
    }

    return (
        product?
        <Container className={classes.container}>
            <h1>Product details</h1>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item>
                        <img 
                            className={classes.img} 
                            alt={product.name} 
                            src={product.image} />
                    </Grid>

                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
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

                        <Grid item >
                            <Typography variant="subtitle1">$ {product.price}</Typography>
                            <Button color="primary" onClick={addProductToCart}><AddShoppingCartIcon/></Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
        : <h1>Not found</h1>
    )
}

export default ProductDetails;