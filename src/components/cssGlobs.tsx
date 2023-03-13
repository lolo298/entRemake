import {css } from "@emotion/react";
export const full = `
width: 100%;
height: 100%;
`;
export const flexCol = `
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

export const fullCol = css`
  ${full}
  ${flexCol}
`;
export const NavCss = css`
  width: 100%;
  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 7rem;
    a {
      text-decoration: none;
      color: #000;
      &:visited {
        color: #000;
      }
    }
  }
`;
