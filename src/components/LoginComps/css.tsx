import { css } from "@emotion/react";
import { flexCol, full, fullCol } from "../cssGlobs";

export const app = {
  ...flexCol,
  gap: "3rem",
  backgroundColor: "var(--main-content)",
  width: "100%",
  height: "90%",
  filter: "",
  pointerEvents: "auto" as "auto" | "none",
  "a": {
    textDecoration: "none"
  }
};
export const loginForm = {
  ...fullCol,
  justifyContent: "flex-end",
  filter: ""
};
export const loginContent = {
  height: "75%",
  width: "60%",
  ...flexCol,
  justifyContent: "space-between",
  backgroundColor: "#fff",
  border: "2px solid black"
};
export const loginLabel = {
  width: "66%",
  height: "20%",
  marginTop: "1rem",
  border: "none",
  position: "relative" as "relative",
  ...flexCol,
  alignItems: "flex-start",
  "span": {
    pointerEvents: "none" as "none",
    position: "absolute" as "absolute",
    top: "calc(50% - 0.5rem)",
    left: "10px",
    padding: "0 0.5rem",
    backgroundColor: "#fff"
  },
  "input": {
    width: "100%",
    lineHeight: "3rem",
    border: "2px solid black"
  }
};
export const btnLong = {
  textTransform: "uppercase" as "uppercase",
  width: "33%",
  height: "11%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "2px solid black",
  backgroundColor: "var(--bouton-primary)",
  color: "#fff",
  marginTop: "",
  marginBottom: "",
  marginLeft: "",
  marginRight: "",
  textAlign: "center" as "center"
};
export const oubli = {
  fontSize: "0.8em",
  textDecoration: "underline",
  width: "66%",
  ...flexCol, //check
  "a": {
    marginTop: "0.5rem",
    "&:visited": {
      color: "#000"
    }
  }
};
export const personnel = {
  ...full,
  ...flexCol,
  "&>header": {
    height: "15%",
    width: "66%",
    backgroundColor: "var(--cards-header)",
    color: "var(--bouton-text)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
};
export const personnelContent = {
  boxSizing: "border-box" as "border-box",
  height: "max-content",
  width: "66%",
  marginBottom: "1%",
  padding: "0 5% 2% 5%",
  ...flexCol,
  justifyContent: "space-between",
  backgroundColor: "var(--cards-content)",
  ".images-container": {
    ...full,
    marginTop: "1rem",
    display: "flex",
    flexDirection: "row" as "row",
    alignItems: "center",
    justifyContent: "space-between",
    ".image-container": {
      ...flexCol,
      cursor: "pointer",
      "span": {
        position: "absolute" as "absolute",
        color: "#fff",
        zIndex: 1
      },
      "img": {
        width: "90%",
        objectFit: "cover" as "cover",
        filter: "brightness(60%)"
      }
    }
  }
};
