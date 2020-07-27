import React from 'react'
import ProductListItemProps from '../props/ProductListItemProps';
import { Grid, Button, Paper, makeStyles, Typography } from "@material-ui/core"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";


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
    let match = useRouteMatch();

    return (
        <>
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
                        $ {props.product.price}
                    </Typography>
                    <Button color="primary">
                        <Link to={`${match.url}/${props.product.id}`}>
                            Details
                        </Link>
                    </Button>
                </Grid>
            </Grid>
        </Paper>
        </>
    )
}

export default ProductListItem
