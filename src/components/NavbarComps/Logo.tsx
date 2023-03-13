import { jsx, css } from "@emotion/react";
import React from "react";

export function Logo() {
  let imgStyle = css`
    height: 70%;
    aspect-ratio: 1;
    filter: brightness(0%);
  `;
  let logoContainer = css`
    display: flex;
    align-items: center;
    height: 100%;
  `;
  let pStyle = css`
    margin: 0;
    font-size: 1.5rem;
    font-weight: 600;
    margin-left: 1rem;
    color: rgb(05, 05, 05);
  `;
  return (
    <div css={logoContainer}>
      <img src="/rennes.svg" alt="Université de rennes" css={imgStyle} />
      <div>
        <p css={pStyle}>Université</p>
        <p css={pStyle}>de Rennes</p>
      </div>
    </div>
  );
}
