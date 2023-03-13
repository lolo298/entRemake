import React, { useState } from "react";
import { css } from "@emotion/react";

export function Card(props) {
  const { type } = props;
  const cardCss = css({
    justifySelf: "center",
    border: "2px solid #000",
    height: "100%",
    width: "100%",
    position: "relative",
    "span": {
      position: "absolute",
      top: "100%",
      left: "0",
      zIndex: 1,
      backgroundColor: "black",
      color: "white",
      transform: "translateY(-100%)",
      fontSize: "1.4rem",
      padding: "0.5rem",
    },
    "img": {
      width: "100%",
      height: "100%",
      backgroundColor: "white",
      filter: "brightness(65%)",
    },
    "&:hover": {
      "img": {
        filter: "brightness(40%)",
      },
      "span": {
        backgroundColor: "#FAA61A",
        color: "white",
      },
    },
  });

  let texte = "";
  switch (type) {
    case "emploiTmp":
      texte = "Mon emploi du temps";
      break;
    case "message":
      texte = "Ma messagerie";
      break;
    case "notes":
      texte = "Mes notes";
      break;
    case "moodle":
      texte = "Moodle";
      break;
    default:
      break;
  }

  return (
    <div css={cardCss}>
      <span>{texte}</span>
      <img src={type + ".png"} alt={type} />
    </div>
  );
}
