import React, { useState } from "react";
import {
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Paper
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//Component Functionality
import API from "../utils/API";

//Imported components
import BookCard from "./BookCard";

//Material UI styling
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  queryButton: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
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
function QueryBooks({ lists, setMyBooks, myBooks }) {
  //Material UI styling
  const classes = useStyles();

  //State Variables
  const [queryList, setqueryList] = useState(null);
  const [books, setBooks] = useState([]);

  //Component Functionality
  //Function to get books based on currently selected list
  async function handleSubmit() {
    const queryBooks = await API.getBooks(queryList.queryName);
    setBooks(queryBooks.data.results);
  }

  return (
    <Paper elevation={3} className={classes.root}>

    <Grid container spacing={1} align="center">
      <Grid item xs={12} className={classes.header}>
        <Typography variant="h3" align="center">
          Search by Book Category
        </Typography>
      </Grid>
      {/* Select input to get list to use to query api */}
      <Grid item xs={12}>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Book Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            defaultValue=""
            onChange={(e) => setqueryList(e.target.value)}
            >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {lists.map((item, i) => {
              return (
                <MenuItem key={i} value={{queryName:item.list_name_encoded, regName: item.list_name}}>
                  {item.list_name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        {/* Button that sends query to api */}
        <Button
          variant="contained"
          onClick={handleSubmit}
          className={classes.queryButton}
          >
          Get Books
        </Button>
      </Grid>
      <Grid item xs={12} className={classes.header}>
        {/* If there is a list selected display this header with listname  */}
        {queryList && (
          <Typography variant="h4">
            Best Sellers from the {queryList.regName} category
          </Typography>
        )}
      </Grid>
      <Grid item xs={12}>
        {books.length > 0 &&
          books.map((item, i) => {
            return (
              <BookCard
              key={i}
              btn_action={setMyBooks}
              book={item}
              action_type="add"
              myBooks={myBooks}
              />
              );
            })}
      </Grid>
    </Grid>
            </Paper>
  );
}

export default QueryBooks;
