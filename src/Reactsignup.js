import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import house from './images/house.png'
import './Login.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  leftback: {
    display: "block",
    background: "#f3ead4",
    height: "100vh",
    paddingTop: "5rem",
    },
    
  gridview1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  header: {
    fontSize: "2.8rem",
    fontWeight: "normal",
    lineHeight: "1.5",
    fontFamily: "PlayfairDisplay-Regular",
    color: "#1d0e1a",
    width: "45%",
    padding: "0rem 7rem",
    textAlign: "left",
    alignItems: "center",
    marginTop: "4rem",
    },
    
  bgc: {
    padding: '80px 0 0',
    backgroundColor: '#f3ead4',   
    [theme.breakpoints.down("xs")]: {
        display: "none",
      },
  },
  HeythereWelcomeb : {
    fontFamily: 'popins',
    fontSize: '2rem',
    fontWeight: '600',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.5',
    letterSpacing: 'normal',
    color: '#000000',  
    [theme.breakpoints.down("xs")]: {
        fontSize: '1.5rem',
      },
  },
  textstyle: {
    fontWeight: '300',
  },
    Easiestwaytosearc: {
        width: '45%',
        margin: '0 auto',
        fontFamily: 'PlayfairDisplay',
        fontSize: '46px',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontstyle: 'normal',
        lineHeight: '1.5',
        letterSpacing: 'normal',
        color: '#1d0e1a',
        
    [theme.breakpoints.down("xs")]: {
      display: "none",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: '36px',
      },
      },
      inputfiled: {
          marginBottom: '30px',
      },
      images :{
        [theme.breakpoints.down("xs")]: {
            backgroundColor: '#f3ead4',
            }, 
      },
      Rectangle: {
        padding: '10px',
        textAlign: 'center',
        margin: '39px 0 29px !important',
      borderRadius: '25px',
      backgroundColor: '#772360',
      color: 'white',
    },
  Donthaveanaccount: {
    fontFamily: 'popins',
    fontSize: '14px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#666666',
  },
  textstyle1: {
    fontWeight: 'bold',
    color: '#772360',
  },
  center:{
    display: 'block',
    margin: '0 auto',
    width: '60%',
    paddingTop: '80px', 
    paddingBottom: '40px',
    [theme.breakpoints.down("xs")]: {
        padding: '40px 0px', 
        },
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} sm={6} className={classes.bgc}>
          <Grid item xs={12} sm={12} md={12} >
            <Typography variant="h6" className={classes.Easiestwaytosearc}>
                Easiest way 
                to search a villa 
                for rent.
            </Typography>
          <Grid item xs={12} sm={12} md={12}>
            <img src={house} alt="backgroundimage" className={classes.image} />
          </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.images}>
                <div className={classes.center}>
                    <div style={{marginBottom: '50px'}}>
                    <Typography className={classes.HeythereWelcomeb}> 
                        <span className={classes.textstyle}>Create your<br /></span>Rento Account.
                    </Typography>
                    </div>
                    
                   <div>
                   <Typography>Full Name</Typography>
                    <TextField
                                type="password"
                                /* label="Label" */
                                className={classes.inputfiled}
                                fullWidth
                                placeholder="Anand"
                                color="primary"
                                autoComplete="off"
                                />
                   </div>
                   <div>
                    <Typography>Email</Typography>
                    <TextField
                                type="text"
                                /* label="Label" */
                                className={classes.inputfiled}
                                fullWidth
                                placeholder="anand@gmail.com"
                                color="primary"
                                autoComplete="off"
                                />
                    </div>
                   <div>
                   <Typography>Password</Typography>
                    <TextField
                                type="password"
                                /* label="Label" */
                                className={classes.inputfiled}
                                fullWidth
                                placeholder="Enter your Password"
                                color="primary"
                                autoComplete="off"
                                />
                   </div>
                   <div>
                   <Typography>Confirm Password</Typography>
                    <TextField
                                type="password"
                                /* label="Label" */
                                className={classes.inputfiled}
                                fullWidth
                                placeholder="...."
                                color="primary"
                                autoComplete="off"
                                />
                   </div>
                <Typography className={classes.Rectangle}>Sign Up</Typography>
                <Typography className={classes.Donthaveanaccount}  style={{
                    textAlign:'center',
                    display: 'block',
                    margin: '0 auto'}}>
                Already have an account?<span className={classes.textstyle1}> Login</span>
                </Typography>
                </div>
        </Grid>
    </Grid>
    </div>
  );
}
