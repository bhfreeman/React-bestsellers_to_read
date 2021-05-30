import React, { useState, useEffect } from "react";
import API from "../utils/API";

function Books({lists}) {

    const [queryList, setqueryList] = useState('query list')
    const [books, setBooks] = useState([])
    async function handleSubmit() {
        const queryBooks = await API.getBooks(queryList)
        setBooks(queryBooks.data.results)
    }

  return (
    <div>
      <h1>hello, query selected is {queryList}</h1>
      {/* {lists.map((item) => {
        <p> {item} </p>;
      })} */}

      <select onChange={e => setqueryList(e.target.value)}>
          <option>Select List</option>
        {lists.map((item) => {
         return <option value={item.list_name_encoded}>{item.list_name}</option>;
        })}
      </select>
      <button onClick={handleSubmit}>Get Books</button>
      {books.map((item) => {
          return <p>{item.book_details[0].title}</p>
      })}
    </div>
  );
}

export default Books;
