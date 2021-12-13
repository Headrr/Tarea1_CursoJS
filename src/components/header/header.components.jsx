import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

import {Button} from 'reactstrap';

const Header = () => {
  
  return (
    <AppBar position="sticky" style={{background: '#ff530d'}}>
      <Toolbar variant="dense" style={{alignSelf: 'flex-start', backgroundColor: '#6c757d', paddingBottom: 10}}>
        <Typography variant="h3" color="inherit" component="div" style={{padding: 10, marginTop: 10}}>
        <Button  
          tag={Link}
          color="dark"
          block
          to="/"
          style={{ fontSize: 30, color: 'whitesmoke', backgroundColor: '#6c757d', borderColor: '#6c757d'}}>
            <h1>CookApp</h1>
        </Button>
        </Typography>

        <Typography variant="h3" color="inherit" component="div" style={{padding: 10}}>
        |
        </Typography>
    
        <Typography variant="h3" color="inherit" component="div" style={{padding: 10, marginTop: 10}}>       
          <Button  
            tag={Link}
            color="dark"
            block
            aria-pressed="false"
            active
            to="/recetas"
            style={{ fontSize: 30, color: 'whitesmoke', backgroundColor: '#6c757d', borderColor: '#6c757d', touchAction: 'pan-up'}}>
              Recetas
          </Button>
        </Typography>
    
    </Toolbar>
  </AppBar>
)};

export default Header;
