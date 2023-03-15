import { css } from "@emotion/react";
import { useState } from "react";
import { Nav, Cards, Anchors } from "./HomeComps";
import { flexCol, separator } from "./cssGlobs";
import { Footer } from "./Footer";
import { getDevice, getEditing, updateEditing, updateNav } from "../store";

export function Home() {
  let Page =
    window.location.pathname.split("/")[1].charAt(0).toUpperCase() +
    window.location.pathname.split("/")[1].slice(1);
  updateNav(Page ? Page : "Login");
  const editing = getEditing();
  const device = getDevice();
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
  if (editing) {
    aditionnalJsx = <Anchors />;
  }
  let nav = <Nav />;
  let btn = (
    <button onClick={handleEdit}>{editing ? "enregistrer" : "Organiser mon bureau"}</button>
  );
  if (device === "Mobile") {
    nav = <></>;
    btn = <></>;
  }
  function handleEdit() {
    if (editing) {
      const canvas = document.getElementById("debugAnchors") as HTMLCanvasElement;
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    updateEditing(!editing);
  }

  return (
    <div id="app" css={css(app)}>
      {nav}
      {btn}
      <Cards />
      {aditionnalJsx}
      <Footer />
    </div>
  );
}
