import {css } from "@emotion/react";
import {FooterCard} from "./FooterComps";

export function Footer() {
  const footerCss = {
    backgroundColor: "var(--main-content)",
    width: "80%",
    height: "max-content",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridTemplateRows: "repeat(2, 1fr)",
    alignItems: "flex-start",
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
