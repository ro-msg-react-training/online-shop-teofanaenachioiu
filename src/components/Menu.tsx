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
        height: '3em',
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

                <Link to='/products'>
                    <Button className={classes.menuItem}>
                        Products
                    </Button>
                </Link>
                
                <Link to='/cart'>
                    <Button className={classes.menuItem}>
                        Shopping Cart
                    </Button>
                </Link>
            </Container>
        </div >
    )
}

export default Menu;
