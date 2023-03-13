import React, { useState } from "react";
import { css } from "@emotion/react";
import { Card } from "./Card";
export function Cards() {
  const [grid, setGrid] = useState(5);

  const cardsCss = {
    display: "grid",
    gridTemplateColumns: `1fr 1fr`,
    gridTemplateRows: `repeat(${Math.ceil(grid/2)}, 1fr)`,
    gap: "1rem",
    padding: "1rem",
    width: "80%",
    height: "max-content",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div css={css(cardsCss)}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}