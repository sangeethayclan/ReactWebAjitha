import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Avatar } from '@material-ui/core';
import tick from './images/group-9.png'
import truck from './images/truck.png'
import phone from './images/phone.png'
import power from './images/power.png'
import Carousel from 'react-elastic-carousel';
import  './Item.js'

const breakPoints = [
  { width: 1, itemsToShow: 1.5 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1000, itemsToShow: 4 },
  { width: 1200, itemsToShow: 4 },
];

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  tick:{
        width: '40px',
        height: '40px',
        objectFit: 'contain',
        background:'white',
  },
  RentalAgreement: {
    width: '149px',
    margin: '10px 0 10px',
    fontFamily: 'PlayfairDisplay',
    fontSize: '18px',
    fontWeight: '600',
    color: '#1d0e1a',
  },
  Mask1: {
    width: '212px',
    height: '260px',
    /*margin: '79px 64px',*/
    margin:'80px 20px',
    padding: '0 0 60px',
    borderRadius: '12px',
    borderTop: 'solid 3px rgba(39, 166, 166, 0.3)',
    border: 'solid 1px rgba(39, 166, 166, 0.3)',
    backgroundColor: '#ffffff',
    padding: "2.5rem 1.18rem",
    [theme.breakpoints.down("xs")]:{
        margin:'0px 20px',
        },
  },
  Mask2: {
    width: '212px',
    height: '260px',
    margin: '80px 20px',
    padding: '0 0 60px',
    borderRadius: '12px',
    borderTop: 'solid 3px rgba(241, 158, 94, 0.3)',
    border: 'solid 1px rgba(241, 158, 94, 0.3)',
    backgroundColor: '#ffffff',
    padding: "2.5rem 1.18rem",
    [theme.breakpoints.down("xs")]:{
        margin:'0px 20px',
        },
  },
  Mask3: {
    width: '212px',
    height: '260px',
    margin: '80px 20px',
    padding: '0 0 60px',
    borderRadius: '12px',
    borderTop: 'solid 3px rgba(204, 93, 106, 0.3)',
    border: 'solid 1px rgba(204, 93, 106, 0.3)',
    backgroundColor: '#ffffff',
    padding: "2.5rem 1.18rem",
    [theme.breakpoints.down("xs")]:{
        margin:'0px 20px',
        },
  },
  Mask4: {
    width: '212px',
    height: '260px',
    margin: '80px 20px',
    padding: '0 0 60px',
    borderRadius: '12px',
    borderTop: 'solid 3px rgba(39, 166, 166, 0.3)',
    border: 'solid 1px rgba(39, 166, 166, 0.3)',
    backgroundColor: '#ffffff',
    padding: "2.5rem 1.18rem",
    [theme.breakpoints.down("xs")]:{
        margin:'0px 20px',
        },
  },
  cNNJIt:{
    border:'0 !important',
  },
}));

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <div
    style={{
      display:'flex',
      justifyContent: "center",
      alignItems: "center",
      margin: "40px auto",
    }}>
        <Carousel breakPoints={breakPoints}>
        <Card className={classes.Mask1}>
      <CardContent>
        <Avatar variant="square">
            <img src={truck} className={classes.tick} />
        </Avatar>
        <Typography className={classes.RentalAgreement}>Packers & Movers
        </Typography>
        <Typography variant="body2" component="p" >
        5-star rated home shifting service for smooth moveins
        </Typography>
      </CardContent>
      </Card>

      <Card className={classes.Mask2}>
      <CardContent>
        <Avatar variant="square">
            <img src={power} className={classes.tick} />
        </Avatar>
        <Typography className={classes.RentalAgreement}>Home Services
        </Typography>
        <Typography variant="body2" component="p" >
        Exceptional discounts on home services by urban company
        </Typography>
      </CardContent>
      </Card>

      <Card className={classes.Mask3}>
      <CardContent>
          <Avatar variant="square">
              <img src={phone} className={classes.tick} />
          </Avatar>
          <Typography className={classes.RentalAgreement}>Rental Agreement
          </Typography>
          <Typography variant="body2" component="p" >
          india’s only online service with digital signing
          </Typography>
        </CardContent>
        </Card>

        <Card className={classes.Mask4}>
        <CardContent>
          <Avatar variant="square">
              <img src={tick} className={classes.tick} />
          </Avatar>
          <Typography className={classes.RentalAgreement}>Tenant Verification
          </Typography>
          <Typography variant="body2" component="p" >
          Authentic tenant verification at a click
          </Typography>
        </CardContent>
        </Card></Carousel>
    </div>
  );
}
