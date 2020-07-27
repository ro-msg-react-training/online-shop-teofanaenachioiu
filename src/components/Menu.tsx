import React from 'react';
import { Button, makeStyles, Container } from '@material-ui/core';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    topnav: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
    },
    topnavContent: {
        display: 'flex',
        height: 50,
        alignItems: 'center'
    },
    spacer: {
        flex: 1
    },
    menuItem: {
        textDecoration: 'none',
        color: theme.palette.primary.contrastText,
        textTransform: 'capitalize'
    }
}));

function Menu() {
    const classes = useStyles();

    return (
        <div className={classes.topnav}>
            <Container className={classes.topnavContent}>
                <h1> Online Shop </h1>
                <div className={classes.spacer}></div>
                <Button>
                    <Link to='/products' className={classes.menuItem}>Products</Link>
                </Button>
                <Button>
                    <Link to='/cart' className={classes.menuItem}>Shopping Cart</Link>
                </Button>
            </Container>
        </div>
    )
}

export default Menu;
