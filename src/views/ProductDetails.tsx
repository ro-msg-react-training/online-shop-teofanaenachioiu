import React, { useEffect, useState, Fragment } from 'react';
import { Container, Typography, Grid, Button, makeStyles, LinearProgress } from "@material-ui/core";
import { RouteComponentProps, useHistory } from "react-router-dom";
import { findById, deleteById } from '../data/ProductService';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import { addProductInUserCart } from '../data/CartService';
import Product from '../domain/Product';
import { StyledPaper } from '../components/StyledPaper';


const useStyles = makeStyles((theme) => ({
    img: {
        width: '100%',
        height: '100%'
    },
}));

function ProductDetails(props: RouteComponentProps<any>) {
    const params = props.match.params
    const initialProduct = {} as Product

    const [product, setProduct] = useState(initialProduct)
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    const history = useHistory();
    const classes = useStyles();


    useEffect(() => {
        findById(params.id)
            .then(result => {
                setProduct(result.data)
                setIsLoading(false)
            })
            .catch(err => {
                setIsError(true)
                setIsLoading(false)
            })
    }, [params.id]);

    const addProductToCart = () => {
        addProductInUserCart(product)
        alert('Product ' + product.name + ' added to cart!')
    }

    const deleteProduct = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        deleteById(params.id)
            .then(result => {
                history.goBack()
                e.preventDefault()
            })
            .catch(err => {
                alert(err)
            })
    }

    return (
        <Container>
            <h1>Product details</h1>
            {
                isLoading ?
                    <LinearProgress /> :
                    isError ?
                        <p> Product not found </p> :
                        <Fragment>

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
                                            <Button color="primary" onClick={addProductToCart}><AddShoppingCartIcon /></Button>
                                        </Grid>
                                        <Grid item >
                                            <Button color="primary" onClick={deleteProduct}><DeleteForeverOutlinedIcon /></Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </StyledPaper>
                        </Fragment>
            }
        </Container>
    )
}

export default ProductDetails;