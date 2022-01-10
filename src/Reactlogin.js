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
    padding: '100px 0 0',
    backgroundColor: '#f3ead4',   
    [theme.breakpoints.down("xs")]: {
        display: "none",
      },
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
      }
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
                <div className="center">
                    <div className="marbot">
                    <span class="Hey-there-Welcome-b">
                        <span class="text-style-1">Hey there!<br /></span>Welcome back.
                    </span>
                    </div>
                    <span>Email</span>
                    <TextField
                                type="text"
                                /* label="Label" */
                                className={classes.inputfiled}
                                fullWidth
                                placeholder="anand@gmail.com"
                                color="primary"
                                autoComplete="off"
                                />
                   <div className='textmargin'>
                   <span>Password</span>
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
                <div className="Forgot-Password" style={{
                    textAlign:'right'
                }}>Forgot password</div>
                <div className="Rectangle">Login</div>
                <span class="Dont-have-an-account"  style={{
                    textAlign:'center',
                    display: 'block',
                    margin: '0 auto'}}>
                Dont have an account?<span class="text-style-1"> Create Account</span>
                </span>
                </div>
        </Grid>
    </Grid>
    </div>
  );
}
