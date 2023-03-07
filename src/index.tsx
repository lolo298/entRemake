import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./Navbar";
import Login from "./login";

function App() {
  return (
    <div id="app">
      <Navbar />
      <Login />
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
