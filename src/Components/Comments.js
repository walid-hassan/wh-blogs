import React, { useState, useEffect } from 'react';
import { Paper, Box, Grid } from '@material-ui/core';
import './Comments.css';
import UserImage from '../images/user.png'

const Comments = ({comment}) => {
    const [userPic, setUserPic] = useState();
    useEffect( () => {
        fetch ('https://randomuser.me/api/')
        .then ( res => res.json())
        .then (data => setUserPic(data.results[0].picture.medium))
        .catch ( error => setUserPic(UserImage))
    }, [])
    const {name, email, body} = comment;
    return (
        <Grid container>
            <Grid item md={2}>
                <img className="userPic" src={userPic} alt=""/>
            </Grid>
            <Grid item md={8} className="commentBox" >
                    <Box component="h4"> {name} </Box>
                    <Box component="h6"> {email} </Box>
                    <Box className="commentBody" component="p"> {body} </Box>   
            </Grid>
        </Grid>
    );
};

export default Comments;