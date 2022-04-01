import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export function SignUp() {

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const signUp = () => {

    const newUser = {
        userName,
        email,
        password,
    };
    console.log(newUser);

    fetch(`https://stack-overflow-be-api.herokuapp.com/`, {method: "POST",

            body:JSON.stringify(newUser),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => history.push("/signup"));
  }

  const paperStyle =  { borderRadius: "10px", padding:"20px", Height: "100vh", width:"300px", margin:"20px auto"}

  return (

    <Grid mt="50px" align="center">
      <Paper elevation={10} style={ paperStyle}>
          <Typography variant="h4" marginTop="20px"> SIGN UP </Typography>

          <TextField value={userName}  onChange={(event) => setUserName(event.target.value)}
             label="Enter your Name" variant="standard" padding="20px" style={{marginTop:"10px"}}  fullWidth/> <br />

          <TextField value={email} onChange={(event) => setEmail(event.target.value)}
              label="Enter your Email" variant="standard" padding="20px" style={{marginTop:"10px"}} fullWidth/><br />
  
          <TextField  value={password}  onChange={(event) => setPassword(event.target.value)}
             label="Enter your Password" variant="standard" style={{marginTop:"10px"}} fullWidth/><br />

          <FormControlLabel  className="Checkbox" control={<Checkbox Checked color="primary"/>} 
              label="Receive occasional product updates, user research invitations."/> 
            <Button onClick={SignUp} variant="contained" margin="50px" padding="30px" fullWidth>Sign Up</Button>
      </Paper>      
    </Grid> 
  );
}
