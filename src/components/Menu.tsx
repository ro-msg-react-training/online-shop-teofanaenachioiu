import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
    topnav: {
        float: 'right'
    },
});

function Menu() {
    const classes = useStyles();

    return (
        <div className={classes.topnav}>
            <Button><Link to='/products'>Products</Link></Button>
            <Button><Link to='/cart'>Shopping Cart</Link></Button>
        </div>
    )
}

export default Menu;
