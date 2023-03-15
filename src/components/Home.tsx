import { css } from "@emotion/react";
import { useState } from "react";
import { Nav, Cards, Anchors } from "./HomeComps";
import { flexCol } from "./cssGlobs";
import { Footer } from "./Footer";
import { getDevice, updateNav } from "../store";

export function Home() {
  let Page =
    window.location.pathname.split("/")[1].charAt(0).toUpperCase() +
    window.location.pathname.split("/")[1].slice(1);
  updateNav(Page ? Page : "Login");
  const [organisation, setOrganisation] = useState(false);
  const app = {
    ...flexCol,
    backgroundColor: "var(--main-content)",
    width: "100%",
    position: "relative" as "relative",
    "a": {
      textDecoration: "none"
    }
  };

  let aditionnalJsx = <></>;
  if (organisation) {
    aditionnalJsx = <Anchors />;
  }
  let nav = <Nav />;
  if (getDevice() === "Mobile") {
    nav = <></>;
  }

  return (
    <div id="app" css={css(app)}>
      {nav}
      {/* <button onClick={() => setOrganisation(!organisation)}>
        {organisation ? "enregistrer" : "Organiser mon bureau"}
      </button> */}
      <Cards organisation={organisation} />
      {aditionnalJsx}
      <Footer />
    </div>
  );
}
