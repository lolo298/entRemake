import { NavbarProps } from "Navbar";
import { jsx, css } from "@emotion/react";
import React from "react";
import { Logo, SearchBar, Account } from "./NavbarComps";

export function Navbar(props: NavbarProps) {

    function handleNavUpdate(page: string) {
      document.cookie = `page=${page}`;
      props.updateNav(page);
    }
  let navStyle = {
    backgroundColor: "white",
    borderBottom: "2px solid black",
    height: "10%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
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
    return (
      <nav css={css(navStyle)}>
        <Logo />
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
          <Account updateNav={handleNavUpdate} />
          <Account type="logout" updateNav={handleNavUpdate} />
        </div>
      </nav>
    );
  }
    let currentPage = document.cookie.replace(/(?:(?:^|.*;\s*)page\s*\=\s*([^;]*).*$)|^.*$/, "$1") ?? props.type;
    switch (currentPage) {
      case "login":
        return loginNav();
      case "home":
        return homeNav();
      default:
        return loginNav();
    }

}