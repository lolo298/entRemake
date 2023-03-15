import React, { useState } from "react";
import { css } from "@emotion/react";
import { Card } from "./Card";
import { getDevice } from "../../store";
export function Cards(props) {
  const grid = 4;
  const cardOrder = ["emploiTmp", "message", "notes", "moodle"];
  let templateArea = "";
  for (let i = 0; i < grid; i = i + 2) {
    templateArea += `"card-${i} card-${i + 1}" `;
  }

  const cardsCss = {
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

  console.log(grid, cardOrder);
  if (props.organisation) {
    let gridArea = 0;
    return (
      <div css={css(cardsCss)} id="Cards">
        {cardOrder.map((card) => (
          <Card
            type={card}
            editing={props.organisation.toString()}
            key={card}
            css={css({ gridArea: "card-" + gridArea++ })}
          />
        ))}
      </div>
    );
  }
  if (getDevice() === "Mobile") {
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
