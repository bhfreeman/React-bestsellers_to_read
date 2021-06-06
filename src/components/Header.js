import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    highLightedText: {
        color: '#68C2E8', 
    },
    headerText:{
        fontWeight: 'bolder',
    },
    subTextBox: {
        maxWidth: '300px'
    }
  }));

function Header() {
    const classes = useStyles()
  return (
    <Grid
     container
     justify="center"
     >
        <Grid item >
          <img src="/images/bookListLogo.png" alt="book list logo" />
        </Grid>
        <Grid item >
          <Typography variant ="h1" className={classes.headerText}><span className={classes.highLightedText}>Book</span> List</Typography>
          <Typography variant="h5" align="center" >NYT Best Sellers to Read</Typography>
        </Grid>
    </Grid>
  );
}

export default Header;
