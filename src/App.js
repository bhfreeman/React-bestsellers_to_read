// Dependencies
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Utilities
import useLocalState from "./utils/localState";
import loginPlaceholder from "./utils/login.json";
import API from "./utils/API";

// Pages or components
import Login from "./pages/Login";
import Books from "./pages/Books";

export default function App() {
  const [loginInfo, setLoginInfo] = useState({
    username: loginPlaceholder.userName,
    password: loginPlaceholder.password
  });

  const [lists, setLists] = useLocalState([],'bookLists')
  async function getList() {
    const bookLists = await API.getLists();
    setLists(bookLists.data.results);
  }

  useEffect(() => {
    if (lists.length > 0) return;
    else {
      console.log("testing")
      getList(); }
  });

  return (
    <div className="App">
      <Router>
        <div>
          {/* {lists.map((item) => {
           return <p>{item.list_name}</p>
          })} */}
          <Switch>
            <Route exact path="/">
              <Login
                username={loginInfo.username}
                password={loginInfo.password}
              />
            </Route>
            <Route exact path="/books">
              <Books lists={lists} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
