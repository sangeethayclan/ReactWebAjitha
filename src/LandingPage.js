import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Header from './Header.js'
import bighouse from './images/bighouse.png'
import { Typography } from '@material-ui/core';
import Searchbar from './Searchbar.js'
import Cardscarousel from './Cardscarousel'
import Resheader from './resheader'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  bgcolor:{
    backgroundColor: '#f3ead4',
    position:'relative',
  },
  gridvi:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      width:'100%',
      [theme.breakpoints.down("sm")]: { //1000la brkpnt display flex column in gridvi
          flexDirection:'column',            // easy way textalign center height,margin n0 , margin 0 auto
          },
  },
  Easiestwaytosearc: {
    width: '318px',
    height: '198px',
    margin: '70px 0 0 150px ',
    fontFamily: 'PlayfairDisplay',
    fontSize: '44px',
    lineHeight: '1.5',
    color: '#1d0e1a',   //sm=959    md=1200     xs=600
    [theme.breakpoints.down("sm")]: { //1000la brkpnt display flex column in gridvi
        textAlign:'center', 
        margin: '0 auto',           // easy way textalign center height,margin n0 , margin 0 auto
        },
        [theme.breakpoints.down("xs")]: { //1000la brkpnt display flex column in gridvi
         width:'263px',
         height:'72px',
         fontSize:'24px', 
         margin:'20px auto'        // easy way textalign center height,margin n0 , margin 0 auto
          },
  },
  ProductcraftedbyC: {
    width: '226px',
    height: '23px',
    margin: '17px 0 0 150px',
    fontFamily: 'Poppins',
    fontSize: '16px',
    color: '#1d0e1a',
    [theme.breakpoints.down("sm")]: { //1000la brkpnt display flex column in gridvi
        textAlign:'center', 
        margin: '0 auto',           // easy way textalign center height,margin n0 , margin 0 auto
        },
    [theme.breakpoints.down("xs")]:{
    fontSize: '12px',
    margin:'10px auto',
      },
  },
  bighouse:{
    height:'100%',
    width:'100%',
    objectFit:'fill',
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Resheader />
    <Header />
      <Grid container className={classes.bgcolor} xs={12}>
          <div className={classes.gridvi}>
            <div>
            <Typography className={classes.Easiestwaytosearc}>Easiest way 
                to search a villa 
                for rent.
            </Typography>
            <Typography className={classes.ProductcraftedbyC}>Product crafted by Clanizon.</Typography>
            </div>
            <div><img src={bighouse} className={classes.bighouse} /></div>
        </div>
      </Grid>
        <Searchbar />
        <Cardscarousel />
    </div>
  );
}
