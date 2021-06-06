import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardActions, CardContent, Button, Typography} from '@material-ui/core'

//Material UI styling
const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    maxWidth: 450,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    backgroundColor: '#FFF9EE',
    borderRadius: '10px'
    // backgroundColor: '#F2EDDC'
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
}));


//Component
export default function OutlinedCard({author, title, description, btn_action, action_type, book, myBooks, setMyBooks}) {
    
    //Component Functionality
    //Filter the provided array(the myBooks array) based on the book title, then set myBooks to the new array
    function removeBook(item){
        const book_title = item.book_details[0].title;
        const arr = myBooks.filter(book => book.book_details[0].title != book_title)
        // console.log(arr)
        // console.log(myBooks)
        setMyBooks(arr)

    }

    //Material UI styling
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined" id={book.book_details[0].title}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {book.book_details[0].title}
        </Typography>
        <Typography variant="h5" component="h2">
          {book.book_details[0].author}
        </Typography>
        {/* <Typography className={classes.pos} color="textSecondary">
          {}
        </Typography> */}
        <Typography variant="body2" component="p">
          {book.book_details[0].description}
        </Typography>
      </CardContent>
      <CardActions>
          {(action_type === "add" && myBooks.length < 1)
          ? <Button size="small" onClick={()=> btn_action([book])}>Add to List</Button>
          :<Button size="small" onClick={()=> btn_action([book, ...myBooks])}>Add to List</Button>
        }
        {action_type === "remove" && <Button size="small" onClick={()=> removeBook(book)}>Remove From List</Button>}

        
      </CardActions>
    </Card>
  );
}
