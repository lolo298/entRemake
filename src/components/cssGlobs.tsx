import { css } from "@emotion/react";

export const full = {
  width: "100%",
  height: "100%"
};
export const flexCol = {
  display: "flex",
  flexDirection: "column" as "column",
  alignItems: "center",
  justifyContent: "center"
};
export const fullCol = {
  ...full,
  ...flexCol
};
export const navCss = {
  width: "100%",
  "ul": {
    display: "flex",
    flexDirection: "row" as "row",
    alignItems: "center",
    justifyContent: "center",
    gap: "7rem",
    "a": {
      position: "relative" as "relative",
      textDecoration: "none",
      color: "#000",
      "&:visited": {
        color: "#000"
      }
    }
  }
};
export const separator = {
  width: "80%",
  height: "1px",
  backgroundColor: "rgba(0,0,0,0.2)",
  margin: "10px 0"
};
