import React, { useState } from "react";
import { css } from "@emotion/react";
import { Card } from "./Card";
import { getDevice, getAnchorOrder, getEditing } from "../../store";
export function Cards(props) {
  const grid = 4;
  const cardOrder = getAnchorOrder();
  const editing = getEditing();
  const device = getDevice();
  let templateArea = "";
  for (let i = 0; i < grid; i = i + 2) {
    templateArea += `"card-${i} card-${i + 1}" `;
  }

  const cardsCss = {
    position: "relative" as "relative",
    display: "grid",
    gridTemplateColumns: `1fr 1fr`,
    gridTemplateRows: `repeat(${Math.ceil(grid / 2)}, 1fr)`,
    gridTemplateAreas: templateArea,
    gap: "1rem",
    padding: "1rem",
    width: "80%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "" as "column",
    zIndex: 1
  };

  if (editing) {
    return (
      <div css={css(cardsCss)} id="Cards">
        {cardOrder.map((card, key) => (
          <Card type={card} key={card} css={css({ gridArea: "card-" + key })} idkey={key} />
        ))}
      </div>
    );
  }
  if (device === "Mobile") {
    cardsCss.display = "flex";
    cardsCss.flexDirection = "column" as "column";
    cardsCss.alignItems = "center";
  }
  return (
    <div css={css(cardsCss)}>
      {cardOrder.map((card) => (
        <Card type={card} key={card} />
      ))}
    </div>
  );
}
