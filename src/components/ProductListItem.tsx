import React from 'react'
import ProductListItemProps from '../props/ProductListItemProps';
import { Grid, Button, Paper, makeStyles, Typography, ButtonBase } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    paper: {
        margin: '12px 0',
        padding: '10px',
        borderRadius: '5px'
    },
    img: {
        width: '100px',
    },
}));

function ProductListItem(props: ProductListItemProps) {
    const classes = useStyles();
    return (
        <Paper className={classes.paper}>
            <Grid container spacing={2}>
                <Grid item>
                    <img
                        className={classes.img}
                        alt={props.product.name}
                        src={props.product.image} />
                </Grid>

                <Grid item xs={12} sm>
                    <Typography>
                        {props.product.name}
                    </Typography>
                </Grid>

                <Grid item>
                    <Typography>
                        {props.product.price} euro
                    </Typography>
                    <Button >
                        Details
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default ProductListItem
