import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import rentologo from './images/rentologo.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  rentologo:{
    width: '106px',
    height: '23px',
    margin: '35px  0',
    objectFit: 'contain',
  },
  Login: {
    fontFamily: 'Poppins',
    fontSize: '16px',
    fontWeight: '500',
    color: '#1d0e1a',
    padding: '9px 21px 8px 24px',
    borderRadius: '45pX',
    boxShadow: '2px 2px 10px 5px rgba(0, 0, 0, 0.04)',
    border: 'solid 1px #1d0e1a',
  },
  nohead:{
    
    [theme.breakpoints.down("xs")]:{
      display:'none',
      },
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div>
    <div className={classes.root} className={classes.nohead}>
      <AppBar position="static" style={{background:'#f3ead4'}}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <img src={rentologo} className={classes.rentologo} />
          </Typography>
          <Button  className={classes.Login}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
    </div>
  );
}
