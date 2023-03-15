import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { store, updateDevice } from "./store";

function getDeviceType() {
  let device = "Desktop";
  if (
    navigator.userAgent.includes("Android") ||
    navigator.userAgent.includes("iPhone") ||
    navigator.userAgent.includes("iPad") ||
    window.innerWidth <= 730
  ) {
    device = "Mobile";
  }
  return device;
}
onresize = () => updateDevice(getDeviceType());
updateDevice(getDeviceType());

import { Navbar, Login, Home } from "./components";

let Page =
  window.location.pathname.split("/")[1].charAt(0).toUpperCase() +
  window.location.pathname.split("/")[1].slice(1);

store.dispatch({ type: "SET_PAGE", payload: Page ? Page : "Login" });

function App() {
  return (
    <Provider store={store}>
      <Router>
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
