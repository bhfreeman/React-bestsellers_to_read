import React, { useState, useEffect } from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import QueryBooks from "../components/QueryBooks";
import MyBookList from "../components/MyBookList";
import Header from '../components/Header'

const useStyles = makeStyles((theme) => ({
  header: {
    marginTop: theme.spacing(5),
    //   marginBottom: theme.spacing(5)
  },
}));

function Books({ lists, myBooks, setMyBooks }) {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="center"
      alignItems="flex-start"
      spacing={2}
      className={classes.header}
    >
      <Header />
      {/* <Grid item xs={12}>
        <Typography variant="h1" align="center">
          NYT Best Sellers to Read
        </Typography>
      </Grid> */}
      <Grid item xs={12} sm={6}>
        <QueryBooks lists={lists} setMyBooks={setMyBooks} myBooks={myBooks} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <MyBookList myBooks={myBooks} setMyBooks={setMyBooks} />
      </Grid>
    </Grid>
  );
}

export default Books;
