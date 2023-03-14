import { NavbarProps } from "Navbar";
import { jsx, css } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Logo, SearchBar, Account } from "./NavbarComps";
import { ToolTip } from "./HomeComps/ToolTip";
import { useSelector } from "react-redux";
import { store } from "../store";

const getPage = (state) => state.page;
const getDevice = (state) => state.device;

export function Navbar(props: NavbarProps) {
  const device = useSelector(getDevice);
  const page = useSelector(getPage);

  function mobileMenu() {
    const mobileCss = {
      height: "100%",
    };
    return (
      <div css={css(mobileCss)}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    );
  }

  let navStyle = {
    backgroundColor: "white",
    borderBottom: "2px solid black",
    height: "10%",
    width: "100%",
    display: "flex",
    justifyContent: device === "Desktop" ? "center" : "space-around",
    alignItems: "center",
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
  };
  let buttonsCss = {
    display: "flex",
    gap: "1rem",
    width: "20%",
    justifyContent: "space-around",
  };

  function loginNav() {
    let menu = device === "Desktop" ? <></> : mobileMenu();

    return (
      <nav css={css(navStyle)}>
        <Logo />
        {menu}
      </nav>
    );
  }
  function homeNav() {
    navStyle.justifyContent = "space-around";
    return (
      <nav css={css(navStyle)}>
        <Logo />
        <SearchBar />
        <div css={css(buttonsCss)}>
          <Account />
          <Account type="logout" />
        </div>
      </nav>
    );
  }
  switch (page) {
    case "Login":
      return loginNav();
    case "Home":
      return homeNav();
    default:
      return loginNav();
  }
}