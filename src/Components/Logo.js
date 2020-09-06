import React from 'react';
import Image from '../images/logo.png';
import {Container} from '@material-ui/core';
const Logo = () => {
    const style = {
        width: "250px",
        margin: " 10px 35%" 
    }
    return (
      <Container maxWidth="md">
          <img style={style} src={Image} />
      </Container>  
    );
};

export default Logo;