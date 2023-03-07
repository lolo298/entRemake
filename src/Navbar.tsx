import React from "react";
import "./css/navbar.css";

function Navbar(props) {
  return (
    <nav>
      <img src="/rennes.svg" alt="Université de rennes" />
      <div>
        <p>Université</p>
        <p>de Rennes</p>
      </div>
    </nav>
  );
}

export default Navbar;
