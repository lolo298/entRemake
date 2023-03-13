import { css } from "@emotion/react";
import { flexCol, full, fullCol } from "../cssGlobs";

export const app = css`
  ${flexCol}
  gap: 3rem;
  background-color: var(--main-content);
  width: 100%;
  height: 90%;
  a {
    text-decoration: none;
  }
`;

export const loginForm = css`
  ${fullCol}
  justify-content: flex-end;
`;

export const loginContent = css`
  height: 75%;
  width: 60%;
  ${flexCol}
  justify-content: space-between;
  background-color: #fff;
  border: 2px solid black;
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
    padding: 0 0.5rem;
    background-color: #fff;
  }
  input {
    width: 100%;
    line-height: 3rem;
    border: 2px solid black;
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
  font-size: 0.8em;
  margin-top: 0.5%;
  margin-bottom: 1%;
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
  font-size: 0.8em;
  text-decoration: underline;
  width: 66%;
  display: flex;
  flex-direction: column;
  a {
    margin-top: 0.5rem;
    &:visited {
      color: #000;
    }
  }
`;

export const personnel = css`
  ${full}
  ${flexCol}
    &>header {
    height: 15%;
    width: 66%;
    background-color: var(--cards-header);
    color: var(--bouton-text);
    display: flex;
    align-items: center;
    justify-content: center;
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
  .images-container {
    ${full}
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .image-container {
      ${flexCol}
      cursor: pointer;
      span {
        position: absolute;
        color: #fff;
        z-index: 1;
      }
      img {
        width: 90%;
        object-fit: cover;
        filter: brightness(60%);
      }
    }
  }
`;
