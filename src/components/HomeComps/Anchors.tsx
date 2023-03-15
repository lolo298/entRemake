import { css } from "@emotion/react";
import { useState } from "react";

export function Anchors(props) {
  const [grid, setGrid] = useState(4);
  const [update, setUpdate] = useState(false);
    const [AnchorOrder, setAnchorOrder] = useState(["emploiTmp", "message", "notes", "moodle"]);
    const CardsContainer = document.querySelector("#Cards");
    let height:any = "0px";
    if(CardsContainer !== null){
      height = getComputedStyle(CardsContainer).height;
    }
    console.log(height);
    if(!update){
    setTimeout(() => {
      setUpdate(!update);
    }, 500);
  }
    const anchorsCss = {
      display: "grid",
      gridTemplateColumns: `1fr 1fr`,
      gridTemplateRows: `repeat(${Math.ceil(grid / 2)}, 1fr)`,
      gap: "1rem",
      padding: "1rem",
      width: "80%",
      height: height,
      justifyContent: "center",
      alignItems: "center",
      position: "absolute" as "absolute",
      top: "73px",
      transform: "translateY(15%)",
      color: "red",
      zIndex: 2
    };

    const posCss = {
          justifySelf: "center",
    height: "100%",
    width: "100%",
    position: "relative" as "relative",
    userSelect: "none" as "none",
    }
    let i = 0;
  return (
    <div
      css={css(anchorsCss)} id="Anchors"
    >
      {AnchorOrder.map((anchor) => (
        <div css={css(posCss)} key={anchor} className="anchor" id={"anchor-"+i++}>
        </div>
      ))}
    </div>
  );
}
