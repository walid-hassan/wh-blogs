import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
import SinglePost from './SinglePost';

const Blogposts = () => {
    const [post, setPost] = useState([]);
    useEffect( () => {
        const api = 'https://jsonplaceholder.typicode.com/posts';
        fetch (api)
        .then (res => res.json())
        .then (data => setPost(data))
    }, [])
    return (
        <Container maxWidth="md"> 
            <Grid container item md={12} spacing={2}>
                {
                    post.map( post => <SinglePost post={post} /> )
                }
            </Grid>    
        </Container>
    );
};

export default Blogposts;