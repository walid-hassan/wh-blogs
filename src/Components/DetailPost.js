import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Comments from './Comments';
import {Container, Box, Button} from '@material-ui/core'
import { AccessAlarm, HomeIcon } from '@material-ui/icons';
import "./DetailPost.css"

const DetailPost = () => {
    const {postId} = useParams();
    const [post, setPost] = useState([]);
    useEffect( () => {
        const api = `https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch (api)
        .then ( res => res.json())
        .then ( data => setPost(data))
    }, [])
    const [comments, setComments] = useState([]);
    useEffect( () => {
        const api = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
        fetch (api)
        .then ( res => res.json())
        .then ( data => setComments(data))
    }, [])
    const {title, body} = post;
    return (
        <Container maxWidth="md">
            <Box className="postDetails">
                <Box component="h1"> {title} </Box>
                <Box component="p"> {body} </Box> 
                <Link to="/home">
                    <Button startIcon="<" color="primary" variant="contained" > Back To Home</Button>
                </Link>
            </Box>
            <Box>
                <Box component="h3">Comments Below:</Box>
                <Box>
                {
                    comments.map( comment => <Comments key={comment.id} comment={comment}/>)
                }
                </Box>
            </Box>
        </Container>

    );
};

export default DetailPost;