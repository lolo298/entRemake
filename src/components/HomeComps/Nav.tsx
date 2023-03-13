import { useState } from "react";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";
import { ToolTip } from "./ToolTip";

export function Nav(props) {
  const NavCss = css`
    width: 100%;
    ul {
      z-index: 10;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 7rem;
      a {
        position: relative;
        text-decoration: none;
        color: #000;
        &:visited {
          color: #000;
        }
        &:hover {
          color: #faa61a;
        }
      }
    }
  `;

  const [hover, setHover] = useState("");
  let tooltipCss_bureau = {},
    toolTipCss_intranet = {},
    tooltipCss_formation = {},
    tooltipCss_biblio = {},
    tooltipCss_vie = {},
    tooltipCss_help = {};

  switch (hover) {
    case "bureau":
      tooltipCss_bureau = {
        display: "flex",
      };
      break;
    case "intranet":
      toolTipCss_intranet = {
        display: "flex",
      };
      break;
    case "formation":
      tooltipCss_formation = {
        display: "flex",
      };
      break;
    case "biblio":
      tooltipCss_biblio = {
        display: "flex",
      };
      break;
    case "vie":
      tooltipCss_vie = {
        display: "flex",
      };
      break;
    case "help":
      tooltipCss_help = {
        display: "flex",
      };
      break;
  }
  function handleHover(type) {
    let eventType = type.type;
    let id = type.target.id;
    if (eventType === "mouseleave") {
      setHover("");
    } else {
      setHover(id);
    }
  }

  return (
    <nav css={NavCss}>
      <ul>
        <Link to="/home" onMouseEnter={handleHover} onMouseLeave={handleHover} id="bureau">
          Mon bureau
          <ToolTip type="bureau" passCss={tooltipCss_bureau} />
        </Link>
        <Link to="/home" onMouseEnter={handleHover} onMouseLeave={handleHover} id="intranet">
          Intranet
          <ToolTip type="intranet" passCss={toolTipCss_intranet} />
        </Link>
        <Link to="/home" onMouseEnter={handleHover} onMouseLeave={handleHover} id="formation">
          Formation - Insertion pro
          <ToolTip type="formation" passCss={tooltipCss_formation} />
        </Link>
        <Link to="/home" onMouseEnter={handleHover} onMouseLeave={handleHover} id="biblio">
          Bibliothèques
          <ToolTip type="biblio" passCss={tooltipCss_biblio} />
        </Link>
        <Link to="/home" onMouseEnter={handleHover} onMouseLeave={handleHover} id="vie">
          Vie de l'établissement
          <ToolTip type="vie" passCss={tooltipCss_vie} />
        </Link>
        <Link to="/home" onMouseEnter={handleHover} onMouseLeave={handleHover} id="help">
          Assistance
          <ToolTip type="help" passCss={tooltipCss_help} />
        </Link>
      </ul>
    </nav>
  );
}
