import React from 'react';
import { Button, Container } from '@material-ui/core';
import { Link } from 'react-router-dom'
import { useMenuStyles } from '../styles/js/menuStyle';
import { StyledLink } from './StyledLink';


function Menu() {
    const classes = useMenuStyles();

    return (
        <div className={classes.topnav}>
            <Container className={classes.topnavContent}>
                <h1> Online Shop </h1>
                <div className={classes.spacer}></div>

                <StyledLink to='/' className={classes.link}>
                    <Button className={classes.menuItem}>
                        Home
                    </Button>
                </StyledLink>
                
                <StyledLink to='/products' className={classes.link}>
                    <Button className={classes.menuItem}>
                        Products
                    </Button>
                </StyledLink>
                
                <Link to='/cart' className={classes.link}>
                    <Button className={classes.menuItem}>
                        Shopping Cart
                    </Button>
                </Link>
            </Container>
        </div >
    )
}

export default Menu;
