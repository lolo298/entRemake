import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import Navbar from "./Navbar";
import Login from "./login";

const customHistory = createBrowserHistory();

function App() {
  const [page, setPage] = useState("login");

  return (
    <Router history={customHistory}>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/home">
          <h1>Hello world!🚀</h1>
        </Route>
      </Switch>
    </Router>
  );
}

createRoot(document.getElementById("root")).render(<App />);

