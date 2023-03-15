import { css } from "@emotion/react";
import { getDevice } from "../store";
import { separator } from "./cssGlobs";
import { FooterCard } from "./FooterComps";

export function Footer() {
  let footerCss = {
    backgroundColor: "var(--main-content)",
    width: "80%",
    height: "max-content",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridTemplateRows: "repeat(2, 1fr)",
    alignItems: "flex-start"
  };
  if (getDevice() === "Mobile") {
    let footerCss = {
      display: "flex",
      flexDirection: "column" as "column",
      alignItems: "center",
      fontSize: "0.8rem",
      "div": {
        display: "flex",
        justifyContent: "space-between",
        width: "100%"
      }
    };
    return (
      <footer css={css(footerCss)}>
        <p>{new Date().getFullYear()} - Université de Rennes - Tous droits réservés</p>
        <span css={css(separator)}></span>
        <div>
          <p>Contact</p>
          <p>Plan du site</p>
          <p>Mentions légales</p>
        </div>
      </footer>
    );
  }
  return (
    <footer css={css(footerCss)}>
      <FooterCard type="bureau" />
      <FooterCard type="intranet" />
      <FooterCard type="formation" />
      <FooterCard type="biblio" />
      <FooterCard type="vie" />
      <FooterCard type="help" />
    </footer>
  );
}
