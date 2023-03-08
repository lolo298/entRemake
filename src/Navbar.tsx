/// <reference path="../types/Navbar.d.ts" />
import { NavbarProps } from "Navbar";
import { css } from "@emotion/react";
import React from "react";
import "./css/navbar.css";

function Navbar(props: NavbarProps) {
  let navStyle = css`
    background-color: white;
    height: 10%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  `;
  let imgStyle = css`
    height: 50%;
    aspect-ratio: 1;
    filter: brightness(0%);
  `;
  let pStyle = css`
    margin: 0;
    font-size: 1.5rem;
    font-weight: 600;
    margin-left: 1rem;
    color: rgb(05, 05, 05);
  `;

  return (
    <nav css={navStyle}>
      <img src="/rennes.svg" alt="Université de rennes" />
      <div>
        <p>Université</p>
        <p>de Rennes</p>
      </div>
    </nav>
  );
}

export default Navbar;
