import { css } from "@emotion/react";
import { flexCol, full } from "../cssGlobs";

export const app = css`
  ${flexCol}
  background-color: var(--main-content);
  width: 100%;
  height: 90%;

  a {
    text-decoration: none;
  }
`;

export const loginContent = css`
  height: 100%;
  width: 80%;
  ${flexCol}
  justify-content: space-between;
`;

export const loginLabel = css`
  width: 66%;
  height: 20%;
  margin-top: 1rem;
  border: none;
  position: relative;
  ${flexCol}
  align-items: flex-start;
  span {
    pointer-events: none;
    position: absolute;
    top: calc(50% - 0.5rem);
    left: 10px;
  }
  input {
    width: 100%;
    line-height: 3rem;
    border: none;
  }
`;

export const btnLong = css`
  text-transform: uppercase;
  width: 33%;
  height: 11%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: var(--bouton-primary);
  color: var(--bouton-text);
  font-weight: 600;
  font-size: 1.2em;
  margin-top: 1%;
  margin-bottom: 2%;
  border-radius: 2px;
  cursor: pointer;
  a {
    color: var(--bouton-text);
  }
  &:visited {
    color: var(--bouton-text);
  }
`;

export const oubli = css`
  width: 66%;
  display: flex;
  flex-direction: column;
  a {
    margin-top: 1rem;
    &:visited {
      color: #000;
    }
  }
`;

export const personnel = css`
  ${full}
  ${flexCol}
    &>header {
    height: 33%;
    width: 66%;
    background-color: var(--cards-header);
    color: var(--bouton-text);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    & > a {
      color: var(--bouton-text);
      &:visited {
        color: var(--bouton-text);
      }
    }
  }
`;

export const personnelContent = css`
      box-sizing: border-box;
      height: max-content;
      width: 66%;
      margin-bottom: 1%;
      padding: 0 5% 2% 5%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      background-color: var(--cards-content);
      .img-container {
        ${full}
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        img {
          width: 40%;
          object-fit: cover;
      }
    `;
