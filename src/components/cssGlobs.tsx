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