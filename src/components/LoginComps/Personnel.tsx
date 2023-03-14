import { Link } from "react-router-dom";
import { css } from "@emotion/react";
import { personnel, personnelContent } from "./css";
import { updateNav } from "../../store";
export function Personnel(props) {
  function parentFollowChildLink(e) {
    if (e.target instanceof HTMLElement) {
      const target = e.target.querySelector("a");
      if (!target) throw new Error("No link found");
      window.open(target.href, "_blank");
    }
  }

  return (
    <div id="personnel" css={personnel}>
      <header>Le portail du personnel et des étudiants</header>
      <div id="personnel-content" css={css(personnelContent)}>
        <div className="images-container">
          <Link to={"/home"} className="image-container" onClick={() => updateNav("Home")}>
            <span>Portail des étudiants</span>
            <img src="/portailEleve.png" alt="image 1" />{" "}
          </Link>
          <Link to={"/home"} className="image-container" onClick={() => updateNav("Home")}>
            <span>Portail du personnel</span>
            <img src="/portailPersonnel.png" alt="image 2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
