import { NavbarProps } from "Navbar";
import { useState } from "react";
import { jsx, css } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { Logo, SearchBar, Account } from "./NavbarComps";
import { ToolTip } from "./HomeComps/ToolTip";
import { useSelector } from "react-redux";
import { updateMobileMenu, getDevice, getPage, getMobileMenu } from "../store";

export function Navbar(props: NavbarProps) {
  const menuOpen = getMobileMenu();
  const device = getDevice();
  const page = getPage();

  function mobileMenu(state = "login") {
    const mobileCss = {
      height: "100%",
      width: "10%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "svg": {
        height: "80%",
        width: "80%"
      }
    };
    const tooltipCss = {
      display: menuOpen ? "flex" : "none",
      top: "100%",
      left: "",
      right: "0"
    };
    function toggleTooltip() {
      updateMobileMenu(!menuOpen);
    }
    return (
      <div css={css(mobileCss)}>
        <FontAwesomeIcon
          id="menuIcon"
          icon={menuOpen ? faX : faBars}
          onClick={(e) => {
            toggleTooltip();
          }}
        />
        <ToolTip type={state} passCss={tooltipCss} />
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
    position: "relative" as "relative",
    zIndex: 100
  };
  let buttonsCss = {
    display: "flex",
    gap: "1rem",
    width: "20%",
    justifyContent: "space-around"
  };

  function loginNav(state = "login") {
    let menu = device === "Desktop" ? <></> : mobileMenu(state);

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
      if (device === "Desktop") {
        return homeNav();
      }
      return loginNav("home");
    default:
      return loginNav();
  }
}
