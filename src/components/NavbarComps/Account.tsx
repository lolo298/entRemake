import { Link } from "react-router-dom";
import { css } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
export function Account(props) {
  const AccountCss = {
    color: "black",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    border: "2px solid black",
    width: "50%",
    "&:hover": {
      backgroundColor: "#FAA61A",
      color: "white",
    },
  };
  function handleNavUpdate(page: string) {
    document.cookie = `page=${page}`;
    props.updateNav(page);
  }
  let title = "Mon compte";
  let icons = faUser;
  switch (props.type) {
    case "account":
      icons = faUser;
      title = "Mon compte";
      break;
    case "logout":
      icons = faRightFromBracket;
      title = "Déconnexion";
      break;
  }
  return (
    <Link to="/" css={css(AccountCss)} onClick={() => handleNavUpdate("login")}>
      <FontAwesomeIcon icon={icons} />
      <p>{title}</p>
    </Link>
  );
}
