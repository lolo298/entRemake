import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import { Navbar, Login } from "./components";

const customHistory = createBrowserHistory();

function App() {
  const [page, setPage] = useState<string>("login");

  return (
    <Router history={customHistory}>
      <Navbar type={page} />
      <Switch>
        <Route exact path="/">
          <Login updateNav={setPage} />
        </Route>
        <Route path="/home">
          <h1>Hello world!🚀</h1>
        </Route>
      </Switch>
    </Router>
  );
}
const domRoot = document.getElementById("root");
if (!domRoot) throw new Error("Root element not found");
createRoot(domRoot).render(<App />);

