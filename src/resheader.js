import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import logo from './images/logo.png'
import landmark from './images/landmark.png'
import downarrow from './images/path.png'
import { IconButton, TextField } from '@material-ui/core';
import search from './images/search.png'
import './searchbottom.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "MuiInput-underline:before":{
        borderBottom:'0!important',
    },
    "MuiInput-underline:hover:not(.Mui-disabled):before":{
        borderBottom:'0!important',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  rentologo:{
    height: '23px',
    objectFit: 'contain',
  },
  Login: {
    fontFamily: 'Poppins',
    fontSize: '16px',
    fontWeight: '500',
    color: '#1d0e1a',
    padding: '4px 16px',
    borderRadius: '45pX',
    boxShadow: '2px 2px 10px 5px rgba(0, 0, 0, 0.04)',
    border: 'solid 1px #1d0e1a',
  },
  
  landmark: {
    width: '24px',
    height: '24px',
    margin: '0 2px 1px 0',
    objectFit: 'contain',
  },
  downarrow: {
    objectFit: 'contain',
    border: 'solid 1.5px #333',
  },
  location: {
    margin: '0 12px 0 0',
    fontFamily: 'Poppins',
    fontsize: '18px',
    color: '#000000',
  },
  locality:{
      display:'flex',
      alignItems:'center',
  },
  line:{
      width:'1px',
      height: '42px',
      margin: '0px 20px 0px 0px',
      backgroundColor: '#d8d8d8',
  },
  imgsearch: {
    width: '24px',
    height: '24px',
    margin: '0 12px 1px 0',
    objectFit: 'contain',
  },
  Searchfor:{
      border:'0',
      
    "&.MuiInput-underline:before":{
        borderBottom:'0px'
    },
  },
  secheaderres:{
    display:'none',
    [theme.breakpoints.down("xs")]:{
      display:'block',
      },
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
      <div className={classes.secheaderres}>
    <div className={classes.root}>
      <AppBar position="static" style={{background:'#ffff'}}>
        <Toolbar>
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <img src={logo} className={classes.rentologo} />
    </IconButton>
          <Typography className={classes.title} style={{display:'flex'}}>

<div className={classes.line}></div>

<div className={classes.locality}>
<img src={landmark} className={classes.landmark} />
<Typography className={classes.location}>Madurai</Typography>
<img src={downarrow} className={classes.downarrow} />
</div>
          </Typography>
          <Button  className={classes.Login}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>

    <div>
    <AppBar position="static" style={{background:'#ffff'}}>
        <Toolbar>
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
           <img src={search} className={classes.imgsearch} />
    </IconButton>
          <Typography className={classes.title} style={{display:'flex'}}>
      <TextField 
      style={{ width:'90%'}}
      className={classes.Searchfor}
        fullWidth
        placeholder='Search for locality, landmark, project or builder'
       type="search"  />
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
    </div>
  );
}
