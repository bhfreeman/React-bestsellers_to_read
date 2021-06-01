import React, { useState, useEffect } from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

import QueryBooks from "../components/QueryBooks";
import MyBookList from "../components/MyBookList";

function Books({ lists, myBooks, setMyBooks }) {
  return (
    <Grid container justify="center" alignItems="flex-start" spacing={2}>
        <Grid item xs={12}>
            <Typography variant="h1" align="center">NYT Best Sellers to Read</Typography>
        </Grid>
      <Grid item xs={6}>
        <QueryBooks lists={lists} setMyBooks={setMyBooks} myBooks={myBooks} />
      </Grid>
      <Grid item xs={6}>
        <MyBookList myBooks={myBooks} setMyBooks={setMyBooks} />
      </Grid>
    </Grid>
  );
}

export default Books;
