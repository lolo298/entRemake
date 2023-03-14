import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { store, updateDevice } from "./store";
let device = "Desktop";
if (navigator.userAgent.includes("Android") || navigator.userAgent.includes("iPhone")) {
  device = "Mobile";
}
updateDevice(device);
let Page =
  window.location.pathname.split("/")[1].charAt(0).toUpperCase() +
  window.location.pathname.split("/")[1].slice(1);

store.dispatch({ type: "SET_PAGE", payload: Page ? Page : "Login" });

import { Navbar, Login, Home } from "./components";

const customHistory = createBrowserHistory();

function App() {
  return (
    <Provider store={store}>
      <Router history={customHistory}>
        <Navbar type={Page} />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}
const domRoot = document.getElementById("root");
if (!domRoot) throw new Error("Root element not found");
createRoot(domRoot).render(<App />);
