import React from 'react';
import { Container, makeStyles, Button } from '@material-ui/core';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    center: {
        textAlign: 'center'
    },
    link: {
        textDecoration: 'none'
    }
});


function Home() {
    const classes = useStyles();

    return (
            <Container className={classes.center}>
                <h1>Welcome!</h1>
                <Button>
                    <Link to='/products' className={classes.link}>View products</Link></Button>
            </Container>
    )
}

export default Home;
