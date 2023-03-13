import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import { Navbar, Login, Home } from "./components";

const customHistory = createBrowserHistory();

function App() {
  const [page, setPage] = useState<string>("login");
console.log(page);

  return (
    <Router history={customHistory}>
      <Navbar type={page} updateNav={setPage}/>
      <Switch>
        <Route exact path="/">
          <Login updateNav={setPage} />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
const domRoot = document.getElementById("root");
if (!domRoot) throw new Error("Root element not found");
createRoot(domRoot).render(<App />);

