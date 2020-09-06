import React from 'react';
import { Grid, Box, Button, Paper } from '@material-ui/core';
import { Link } from "react-router-dom";
import './SinglePost.css'

const SinglePost = (props) => {
    const { title, body, id} = props.post;
    const btn= {
        background:"#157d9d ",
        color: "white"
    }
    return (      
            <Grid item sm={6} xs={12} md={4} lg={4}>
                <Paper className=" postBox "elevation={3}>
                    <Box>
                        <Box component="h2">{title}</Box>
                        <Link to={`/post/${id}`}>
                            <Button style={btn} variant="contained">Learn More</Button>
                        </Link>
                    </Box>
                </Paper>
            </Grid>
    );
};

export default SinglePost;