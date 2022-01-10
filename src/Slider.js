/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles, Typography } from '@material-ui/core';
import search from './images/search-black.png'
import landmark from './images/landmark.png'
import downarrow from './images/path.png'

const useStyles = makeStyles((theme) => ({
    Searchforlocality: {
        fontFamily: 'Poppins',
        fontSize: '18px',
        color: '#999999',
        outline:'0',
        border:'0',

      },
      Search: {
        fontFamily: 'Poppins',
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#ffffff',
      },
      imgsearch: {
        width: '24px',
        height: '24px',
        margin: '0 12px 1px 0',
        objectFit: 'contain',
      },
      searchbutton: {
        width: '157px',
        margin: '0 0 0 24px',
        padding: '21px 27px',
        borderRadius: '45px',
        backgroundColor: '#772360',
        display:'flex',
        alignItems:'center',
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
      searchbar:{
          display:'flex',
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'space-between',
          padding: '12px',
          borderRadius: '45px',
          boxShadow: '2px 2px 10px 5px rgba(0, 0, 0, 0.04)',
          background:'white',
          margin:'-47px auto',
          position:'absolute',
          left:'0',
          right:'0'
      },
      line:{
          width:'1px',
          height: '42px',
          margin: '12px 32px 12px 32px',
          backgroundColor: '#d8d8d8',
      },
      nosearch:{
        [theme.breakpoints.down("xs")]:{
          display:'none',
          },
      }
}))
export default function FreeSolo() {
    const classes = useStyles();
  return (
      <>
      <div className={classes.searchbar} style={{width:'75%'}} className={classes.nosearch}>

      <div className={classes.locality}>
          <img src={landmark} className={classes.landmark} />
          <Typography className={classes.location}>Madurai</Typography>
          <img src={downarrow} className={classes.downarrow} />
          <div className={classes.line}></div>
      </div>
      <TextField id="outlined-search" 
      style={{ width:'60%'}}
      className={classes.Searchforlocality}
        fullWidth
        placeholder='Search for locality, landmark, project or builder'
       type="search" 
       variant="outlined" />
       <div className={classes.searchbutton}>
           <img src={search} className={classes.imgsearch} />
           <Typography className={classes.Search}>Search</Typography>
       </div>
      </div>
    </>
  );
}