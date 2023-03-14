import { css } from "@emotion/react";
import { Nav, Cards } from "./HomeComps";
import { flexCol }from "./cssGlobs";
import { Footer } from "./Footer";

export function Home() {
  const app = css`
    ${flexCol}
    background-color: var(--main-content);
    width: 100%;
    a {
      text-decoration: none;
    }
  `;

  return (
    <div id="app" css={app}>
      <Nav />
      <Cards />
      <Footer />
    </div>
  );
}
