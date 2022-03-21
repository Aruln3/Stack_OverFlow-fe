import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@material-ui/core/Box';
import Stack from '@mui/material/Stack';
import ContentPasteSearchSharpIcon from '@mui/icons-material/ContentPasteSearchSharp';


// import { purple } from '@mui/material/colors';

export function Homepage() {

             const paperStyle = {padding:"3px", borderRadius: "10px"}
   const imBUrl = "https://enterprise.efax.com/sf-images/default-source/Blog-Posts/secure-communications-and-messaging-in-2017-efax-corporate.jpg?sfvrsn=93df39cb_0";          
            
  return (
    <Grid container  justifyContent="center" alignItems="center"spacing={8} >
     <Grid item lg={4} className="Box">
                    <Box width={400} height={400} className="Box" bgcolor="#ff7043" justifyContent="center" alignItems="center" >
                            <img width={400} height={200} className="ImgBox" src='https://149351115.v2.pressablecdn.com/wp-content/uploads/2020/04/How-Stack-Overflow-uses-SO-for-Teams.png'/>
                        <Typography className='Typography' variant="h5" >Find the best answer to your technical question, help others answer theirs</Typography>
                        <Button  style={{ justifyItems:"center", borderRadius: 5 , marginLeft: "27%", marginTop:"10px"}} className='btn buttonow'  variant="contained"  >Join the Community
                        </Button>
                        <Button style={{ justifyItems:"center", borderRadius: 5 , marginLeft: "30%", marginTop:"10px"}} className='btn btn-info buttonow' >or search content</Button> 
                    </Box>
    </Grid> 
         <Grid item lg={4} className="Box" >
                    <Box width={400} height={400} className="Box" bgcolor="#ff7043" justifyContent="center" alignItems="center" >
                            <img width={400} height={200} className="ImgBox" src='https://149351115.v2.pressablecdn.com/wp-content/uploads/2018/11/Announcing-Our-New-Partnership-With-Slack-1200x675.png'/>
                        <Typography className='Typography' variant="h5" >Find the best answer to your technical question, help others answer theirs</Typography>
                        <Button  style={{ justifyItems:"center", borderRadius: 5, marginLeft: "22%", marginTop:"10px"}} variant="contained" className='btn btn-info buttonow' >For large Organisations</Button>
                    <Button  style={{justifyItems:"center", borderRadius: 5, marginLeft: "31%", marginTop:"10px"}}  className='btn buttonow btn-small'  >For small Teams</Button>                
                    </Box>  
    </Grid>  
    </Grid>

  );
}