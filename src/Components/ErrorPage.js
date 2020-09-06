import React from 'react';
import { Container, Box, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Error from '../images/error.gif'
import './ErrorPage.css'

const ErrorPage = () => {
    return (
        <Container maxWidth="md">
            <Box>
                <Box className="center" component="h1">
                    Page was not found.
                </Box>
                <Box className="center">
                    <img src={Error} alt=""/>
                </Box>    
            </Box>
            <Box className="center">
                <Link to="/">
                    <Button color="secondary" variant="outlined">Go Back To Home</Button>
                </Link>
            </Box>
        </Container>
    );
};

export default ErrorPage;