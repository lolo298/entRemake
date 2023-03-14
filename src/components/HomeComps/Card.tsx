import React, { useState } from "react";
import { css } from "@emotion/react";
import { CSSInterpolation } from "@emotion/serialize";

export function Card(props) {
  const { type, editing } = props;
  const cardCss: CSSInterpolation = {
    justifySelf: "center",
    border: "2px solid #000",
    height: "100%",
    width: "100%",
    position: "relative" as "relative",
    userSelect: "none" as "none",
    "span": {
      position: "absolute" as "absolute",
      top: "100%",
      left: "0",
      zIndex: 1,
      backgroundColor: "black",
      color: "white",
      transform: "translateY(-100%)",
      fontSize: "1.4rem",
      padding: "0.5rem",
      pointerEvents: "none" as "none"
    },
    "img": {
      width: "100%",
      height: "100%",
      backgroundColor: "white",
      filter: "brightness(65%)",
      pointerEvents: "none" as "none"
    },
    "&:hover": {
      "img": {
        filter: "brightness(40%)"
      },
      "span": {
        backgroundColor: "#FAA61A",
        color: "white"
      }
    }
  };

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
  type anchors = {
    y?: number;
    x?: number;
  }[];

  function moveCard(e) {
    e.preventDefault();
    const card = e.target;
    console.log(e);
    const cardPos = card.getBoundingClientRect();
    const cardX = e.clientX - cardPos.left;
    const cardY = e.clientY - cardPos.top;
    const cardWidth = card.offsetWidth;
    const cardHeight = card.offsetHeight;
    const cardCenterX = cardX - cardWidth / 2;
    const cardCenterY = cardY - cardHeight / 2;
    const cardsPos = document.querySelectorAll(".anchor");
    const cardsAnchor: anchors = [];
    cardsPos.forEach((card: HTMLElement) => {
      const cardPos = card.getBoundingClientRect();
      const cardX = e.clientX - cardPos.left;
      const cardY = e.clientY - cardPos.top;
      const cardWidth = card.offsetWidth;
      const cardHeight = card.offsetHeight;
      const cardCenterX = cardX + cardWidth / 2;
      const cardCenterY = cardY + cardHeight / 2;
      cardsAnchor.push({ x: cardCenterX, y: cardCenterY });
    });
    console.log("ClientX: " + e.clientX + " ClientY: " + e.clientY);
    console.log("CardX: " + cardX + " CardY: " + cardY);
    console.log("CardWidth: " + cardWidth + " CardHeight: " + cardHeight);
    console.log("CardCenterX: " + cardCenterX + " CardCenterY: " + cardCenterY);

    function move(e) {
      // console.log(e.target)
      card.style.pointerEvents = "none";
      const cardX = e.clientX - cardPos.left;
      const cardY = e.clientY - cardPos.top;
      const cardCenterX = cardX + 375 / 2;
      const cardCenterY = cardY + 300 / 2;
      card.style.position = "absolute";
      card.style.width = "375px";
      card.style.height = "300px";
      card.style.left = cardCenterX + "px";
      card.style.top = cardCenterY + "px";
      card.style.zIndex = "100";
      card.style.transform = "translate(-50%, -50%)";
    }

    function stop(e) {
      if (e.target.className === "anchor") {
        let id = card.id.slice(-1);
        card.style.left = cardsAnchor[id].x + "px";
        card.style.top = cardsAnchor[id].y + "px";
        card.style.zIndex = "0";
      } else {
        card.style.pointerEvents = "auto";
        card.style.position = "";
        card.style.width = "";
        card.style.height = "";
        card.style.left = "";
        card.style.top = "";
        card.style.transform = "";
        card.style.zIndex = "0";
      }
      // card.style.transform = "translate(0, 0)";
      console.log("Remove event listeners");
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseup", stop);
    }

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseup", stop);
  }

  if (editing) {
    let i = 0;
    return (
      <div css={css(cardCss)} {...props} id={"card-" + i++} onMouseDown={moveCard}>
        <span>{texte}</span>
        <img src={type + ".png"} alt={type} />
      </div>
    );
  }

  return (
    <div css={css(cardCss)}>
      <span>{texte}</span>
      <img src={type + ".png"} alt={type} />
    </div>
  );
}
