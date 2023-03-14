import { css } from "@emotion/react";
import { useState } from "react";
import { Nav, Cards, Anchors } from "./HomeComps";
import { flexCol } from "./cssGlobs";
import { Footer } from "./Footer";

export function Home() {
  const [organisation, setOrganisation] = useState(true);
  const app = css`
    ${flexCol}
    background-color: var(--main-content);
    width: 100%;
    position: relative;
    a {
      text-decoration: none;
    }
  `;
    let aditionnalJsx = <></>;
    if (organisation) {
        aditionnalJsx = <Anchors />;
    }


  return (
    <div id="app" css={app}>
      <Nav />
      <button onClick={() => setOrganisation(!organisation)}>
        {organisation ? "enregistrer" : "Organiser mon bureau"}
      </button>
      <Cards organisation={organisation} />
      {aditionnalJsx}
      <Footer />
    </div>
  );
}
