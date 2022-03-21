//import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import { Switch, Route } from 'react-router-dom';
import { Navbar} from 'mdbreact';
import {NavbarToggler} from 'mdbreact';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import { AppBar, MenuItem } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import './App.css';
import { Login } from './Login';
import { SignUp } from './SignUp';
import { Homepage } from './Homepage';


function App() {
  
  
  const history = useHistory(); // to update Tool bar/nav bar
  const [mode, setMode] = useState("dark");


  const theme = createTheme({
    palette:{
      mode: mode,
    },
  });
  
  
  return (
    <div className="App">
      
    <ThemeProvider theme={theme}>
      <Paper elevation={1} style={ { borderRadius: "0px", minHeight: "100vh"}}>
        <div className="App">
        <AppBar         
            position="static" style={{marginBottom: "30px"}}>
          <Toolbar  variant="dense">
          <img src="https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.svg" alt="logo" className="logo" />          
          <InputBase className="search-bar btn" 
              placeholder="Search…"
              style={ { padding: "10px", minwidth:"130px", maxwidth:"150px", marginleft:"60px"}} 
              inputProps={{ 'aria-label': 'search' }}
            />
<div className='header'> 
  <nav className="me-auto"
  style={ { minwidth:"60px", maxwidth:"80px" , padding:"1px 0px 1px", margin:"0px"}} >
            <Button variant="text" color="inherit" onClick={() => history.push('/')}>
                  Home
            </Button>   
           {/* onClick = history.push used to replace the Link path to give URL in browser */}
            <Button variant="text" color="inherit" onClick={() => history.push('/userprofile')}>
             Profile
            </Button>
            <Button variant="text"  color="inherit" onClick={() => history.push('/questions')}>
              Questions
            </Button>

            <Button  className="login"  color="inherit" 
              onClick={() => history.push('/login')}
              style={{ flex: 4, align: "right" }}>Login</Button>

            <Button  className="signup"  color="inherit" 
                onClick={() => history.push('/signup')}
                style={{ flex: 2, align: "right" }}>SignUp</Button>

</nav>
            <Button 
              startIcon={
              mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />
              }
              style={ { marginLeft: "0px"}} 
              variant="text" color="inherit" onClick={() => setMode( mode === "light" ? "dark" : "light")}>
            </Button>
</div> 
          </Toolbar>
        </AppBar>  
          <Switch>
            <Route exact path="/">
              <Homepage/>
            </Route>

            
            <Route path="/userprofile">
              Profile
            </Route>
                         
            <Route path="/questions">
              Questions
            </Route>

            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/signup">
              <SignUp/>
            </Route>
             <Route path="**">
                <NotFound/></Route> 
              {/* this ** is a special link that can matches any data given */}
          </Switch>  
        </div>  

      </Paper>
    </ThemeProvider>  
    </div>
  );
}

export default App;


function Welcome(){
  return(
    <h2>Welcome to Stack OverFlow Cloned Webpage</h2>
  );
}


function NotFound(){
  return(
    <div className="not-found-container">
      <h2>404 Not Found </h2>
      <img className="not-found-image" src="https://36bvmt283fg61unuud3h7qua-wpengine.netdna-ssl.com/wp-content/uploads/2013/03/airbnb-404.gif"
          alt="" />
    </div>
  );
}





