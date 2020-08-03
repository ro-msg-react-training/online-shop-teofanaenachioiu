import React from 'react';
import { Container, Button } from '@material-ui/core';
import { Link } from "react-router-dom";
import { useHomeStyles} from '../styles/js/homeStyle'


function Home() {
    const classes = useHomeStyles();

    return (
        <Container className={classes.center}>
            <h1>Welcome!</h1>
            <Button>
                <Link to='/products' className={classes.link}>View products</Link>
            </Button>
        </Container>
    )
}

export default Home;
