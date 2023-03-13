import { css } from "@emotion/react";
import { Nav, Cards } from "./HomeComps";
import { flexCol }from "./cssGlobs";

export function Home() {
  const app = css`
    ${flexCol}
    background-color: var(--main-content);
    width: 100%;
    height: 90%;
    a {
      text-decoration: none;
    }
  `;

  return (
    <div id="app" css={app}>
      <Nav />
      <Cards />
    </div>
  );
}
