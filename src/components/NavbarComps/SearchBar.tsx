import { css } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { full } from "../cssGlobs";

export function SearchBar() {
  let searchBarStyle = css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40%;
    width: 40%;
    label {
      position: relative;
      width: 100%;
      input {
        width: 85%;
        border: 2px solid black;
        padding: 0.5rem;
        padding-left: 3rem;
        font-size: 1.2rem;
        outline: none;
      }
      button {
        position: absolute;
        width: 3rem;
        height: 100%;
        border: none;
        background-color: transparent;
        color: #000000;
        font-size: 1.2rem;
        cursor: pointer;
        outline: none;
      }
    }
  `;

  return (
    <div className="search-bar" css={searchBarStyle}>
      <label htmlFor="search">
        <button type="submit">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
        <input type="text" name="search" placeholder="Rechercher" />
      </label>
    </div>
  );
}
