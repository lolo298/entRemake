import { css } from "@emotion/react";
import { CSSInterpolation } from "@emotion/serialize";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getEditing, updateAnchorOrder, getAnchorOrder } from "../../store";

export function Card(props) {
  const { type } = props;
  const editing = getEditing();
  const AnchorOrder = getAnchorOrder();
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
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
    centerX?: number;
    centerY?: number;
  }[];

  function moveCard(e) {
    e.preventDefault();
    const card = e.target;
    const cardContainer = e.target.parentElement;
    const containerRect = cardContainer.getBoundingClientRect();
    const cardsPos = document.querySelectorAll(".anchor");
    const cardsAnchor: anchors = [];
    cardsPos.forEach((card: HTMLElement) => {
      const cardPos = card.getBoundingClientRect();
      let centerX = cardPos.left + (cardPos.right - cardPos.left) / 2;
      let centerY = cardPos.top + (cardPos.bottom - cardPos.top) / 2;
      cardsAnchor.push(cardPos);
    });

    function move(e) {
      const canva = document.querySelector("#debugAnchors") as HTMLCanvasElement;
      const ctx = canva.getContext("2d");
      let newAnchors = [];
      cardsAnchor.forEach((anchor) => {
        newAnchors.push({
          x: (anchor.x * canva.width) / window.innerWidth,
          y: (anchor.y * canva.height) / window.innerHeight,
          width: ((anchor.right - anchor.left) * canva.width) / window.innerWidth,
          height: ((anchor.bottom - anchor.top) * canva.height) / window.innerHeight
        });
      });

      ctx.clearRect(0, 0, canva.width, canva.height);
      newAnchors.forEach((anchor) => {
        ctx.beginPath();
        ctx.moveTo(anchor.x, anchor.y);
        ctx.lineTo(anchor.x + anchor.width, anchor.y);
        ctx.lineTo(anchor.x + anchor.width, anchor.y + anchor.height);
        ctx.lineTo(anchor.x, anchor.y + anchor.height);
        ctx.lineTo(anchor.x, anchor.y);
        ctx.stroke();
      });

      card.style.pointerEvents = "none";
      card.style.position = "absolute";
      card.style.width = "375px";
      card.style.height = "300px";
      card.style.zIndex = "1000";
      //set the card to the mouse position

      // the card follow the cursor but is excentered
      // card.style.transform = "translate(-50%, -50%)";

      //card center
      card.style.left = e.clientX + "px";
      card.style.top = e.clientY + "px";
      if (card.id === "card-0") {
        card.style.left = e.clientX - 187.5 + "px";
        card.style.top = e.clientY - 150 + "px";
        card.style.transform = "translate(-35%, -50%)";
      }
      if (card.id === "card-1") {
        card.style.transform = "translate(-300%, -100%)";
      }
      if (card.id === "card-2") {
        card.style.transform = "translate(-100%, -250%)";
      }
      if (card.id === "card-3") {
        card.style.transform = "translate(-300%, -250%)";
      }
      cardsPos.forEach((card: HTMLElement) => {
        card.style.backgroundColor = "transparent";
        card.style.opacity = "0.5";
      });
      if (
        e.clientX > cardsAnchor[0].x &&
        e.clientX < cardsAnchor[0].right &&
        e.clientY < cardsAnchor[0].bottom &&
        e.clientY > cardsAnchor[0].top
      ) {
        const anchor = document.querySelector("#anchor-0") as HTMLElement;
        anchor.style.backgroundColor = "blue";
      }
      if (
        e.clientX > cardsAnchor[1].x &&
        e.clientX < cardsAnchor[1].right &&
        e.clientY < cardsAnchor[1].bottom &&
        e.clientY > cardsAnchor[1].top
      ) {
        const anchor = document.querySelector("#anchor-1") as HTMLElement;
        anchor.style.backgroundColor = "blue";
      }
      if (
        e.clientX > cardsAnchor[2].x &&
        e.clientX < cardsAnchor[2].right &&
        e.clientY < cardsAnchor[2].bottom &&
        e.clientY > cardsAnchor[2].top
      ) {
        const anchor = document.querySelector("#anchor-2") as HTMLElement;
        anchor.style.backgroundColor = "blue";
      }
      if (
        e.clientX > cardsAnchor[3].x &&
        e.clientX < cardsAnchor[3].right &&
        e.clientY < cardsAnchor[3].bottom &&
        e.clientY > cardsAnchor[3].top
      ) {
        const anchor = document.querySelector("#anchor-3") as HTMLElement;
        anchor.style.backgroundColor = "blue";
      }
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
      cardsPos.forEach((card: HTMLElement) => {
        card.style.backgroundColor = "";
        card.style.opacity = "";
      });
      check1: if (
        e.clientX > cardsAnchor[0].x &&
        e.clientX < cardsAnchor[0].right &&
        e.clientY < cardsAnchor[0].bottom &&
        e.clientY > cardsAnchor[0].top
      ) {
        let anchor = card.getAttribute("type") as string;
        if (!anchor) break check1;
        let oldCard = AnchorOrder[0];
        let currentCard = AnchorOrder.indexOf(anchor);
        let newAnchorOrder = [...AnchorOrder];
        newAnchorOrder[0] = anchor;
        newAnchorOrder[currentCard] = oldCard;
        updateAnchorOrder(newAnchorOrder);
      }
      check2: if (
        e.clientX > cardsAnchor[1].x &&
        e.clientX < cardsAnchor[1].right &&
        e.clientY < cardsAnchor[1].bottom &&
        e.clientY > cardsAnchor[1].top
      ) {
        let anchor = card.getAttribute("type");
        if (!anchor) break check2;
        let oldCard = AnchorOrder[1];
        let currentCard = AnchorOrder.indexOf(anchor);
        let newAnchorOrder = [...AnchorOrder];
        newAnchorOrder[1] = anchor;
        newAnchorOrder[currentCard] = oldCard;
        updateAnchorOrder(newAnchorOrder);
      }
      check3: if (
        e.clientX > cardsAnchor[2].x &&
        e.clientX < cardsAnchor[2].right &&
        e.clientY < cardsAnchor[2].bottom &&
        e.clientY > cardsAnchor[2].top
      ) {
        let anchor = card.getAttribute("type");
        if (!anchor) break check3;
        let oldCard = AnchorOrder[2];
        let currentCard = AnchorOrder.indexOf(anchor);
        let newAnchorOrder = [...AnchorOrder];
        newAnchorOrder[2] = anchor;
        newAnchorOrder[currentCard] = oldCard;
        updateAnchorOrder(newAnchorOrder);
      }
      check4: if (
        e.clientX > cardsAnchor[3].x &&
        e.clientX < cardsAnchor[3].right &&
        e.clientY < cardsAnchor[3].bottom &&
        e.clientY > cardsAnchor[3].top
      ) {
        let anchor = card.getAttribute("type");
        if (!anchor) break check4;
        let oldCard = AnchorOrder[3];
        let currentCard = AnchorOrder.indexOf(anchor);
        let newAnchorOrder = [...AnchorOrder];
        newAnchorOrder[3] = anchor;
        newAnchorOrder[currentCard] = oldCard;
        updateAnchorOrder(newAnchorOrder);
      }
      console.log(AnchorOrder);
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseup", stop);
    }

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseup", stop);
  }

  if (editing) {
    return (
      <div css={css(cardCss)} {...props} id={"card-" + props.idkey} onMouseDown={moveCard}>
        <span>{texte}</span>
        <FontAwesomeIcon
          icon={faEdit}
          css={css({
            position: "absolute",
            zIndex: 1,
            top: 0,
            left: 0,
            transform: "translate(50%, 50%)",
            width: "50%",
            height: "50%",
            pointerEvents: "none"
          })}
        />
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
