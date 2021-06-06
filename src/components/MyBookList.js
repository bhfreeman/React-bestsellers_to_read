import React from "react";
import { Typography, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// Imported Components
import BookCard from "./BookCard";

const useStyles = makeStyles((theme) => ({
  header:{
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3)
  },
  root: {
    marginTop: theme.spacing(5),
    maxHeight: '600px',
    minHeight: '600px',
    overflow: 'auto'
  }
}));

//Component
function MyBookList({ myBooks, setMyBooks }) {

  const classes = useStyles();
  return (
    <Paper elevation={3} className={classes.root}>
      <Grid container spacing={1} align="center">
        <Grid item xs={12} className={classes.header}>
          <Typography variant="h3" align="center">
            My Books
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {/* map over myBooks and render a bookcard for each object in the array */}
          {myBooks &&
            myBooks.map((item, i) => {
              return (
                <BookCard
                  key={i}
                  book={item}
                  myBooks={myBooks}
                  btn_action={setMyBooks}
                  setMyBooks={setMyBooks}
                  action_type="remove"
                />
              );
            })}
        </Grid>
      </Grid>
    </Paper>
  );
}

export default MyBookList;
