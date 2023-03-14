import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { updateNav } from "../../store";
import { separator } from "../cssGlobs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faFileCircleQuestion,
  faAddressBook,
  faInfoCircle
} from "@fortawesome/free-solid-svg-icons";

export function ToolTip(props) {
  const passCss = props.passCss;
  let tooltipCss = {
    zIndex: 100,
    color: "red",
    display: "none",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: "1rem",
    width: "max-content",
    position: "absolute",
    top: "150%",
    left: "0",
    backgroundColor: "white",
    boxShadow: "0 0 5px 0 rgba(0,0,0,0.5)",
    padding: "20%",
    "a": {
      textDecoration: "none",
      color: "black",
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      "&:visited": {
        color: "black"
      }
    },
    "svg": {
      height: "1rem",
      width: "1rem"
    },
    ...(passCss ? passCss : {})
  };

  const type = props.type;

  let childs: JSX.Element[] = [];

  switch (type) {
    case "login":
      childs = [
        <Link to="/home" onClick={() => updateNav("Home")}>
          <FontAwesomeIcon icon={faClock} />
          Emplois du temps
        </Link>,
        <span css={separator}></span>,
        <Link to="/home" onClick={() => updateNav("Home")}>
          <FontAwesomeIcon icon={faFileCircleQuestion} />
          Actes administratifs
        </Link>,
        <span css={separator}></span>,
        <Link to="/home" onClick={() => updateNav("Home")}>
          <FontAwesomeIcon icon={faAddressBook} />
          Annuaire
        </Link>,
        <span css={separator}></span>,
        <Link to="/home" onClick={() => updateNav("Home")}>
          <FontAwesomeIcon icon={faInfoCircle} />
          Assistance
        </Link>
      ];
      break;
    case "bureau":
      childs = [
        <Link to="/home" key={type + "1"}>
          Mon emploi du temps
        </Link>,
        <Link to="/home" key={type + "2"}>
          Mon dossier étudiant
        </Link>,
        <Link to="/home" key={type + "3"}>
          Mettre un fichier en ligne
        </Link>,
        <Link to="/home" key={type + "4"}>
          Ma messagerie
        </Link>,
        <Link to="/home" key={type + "5"}>
          Mon espace document
        </Link>,
        <Link to="/home" key={type + "6"}>
          Annuaire université de Rennes
        </Link>,
        <Link to="/home" key={type + "7"}>
          Mes abonnements aux listes de diffusion d'étudiants
        </Link>
      ];
      break;
    case "intranet":
      childs = [
        <Link to="/home" key={type + "1"}>
          Accéder au portail étudiants
        </Link>,
        <Link to="/home" key={type + "2"}>
          Mes notes
        </Link>
      ];
      break;
    case "formation":
      childs = [
        <Link to="/home" key={type + "1"}>
          Moodle
        </Link>,
        <Link to="/home" key={type + "2"}>
          Offre de stage, d'alternance et emplois
        </Link>,
        <Link to="/home" key={type + "3"}>
          Klaxoon
        </Link>,
        <Link to="/home" key={type + "4"}>
          Pix
        </Link>,
        <Link to="/home" key={type + "5"}>
          Cours a l'international
        </Link>
      ];
      break;
    case "biblio":
      childs = [
        <Link to="/home" key={type + "1"}>
          Vos Bibliothèques
        </Link>,
        <Link to="/home" key={type + "2"}>
          Supernova
        </Link>,
        <Link to="/home" key={type + "3"}>
          Synthèses - Thèses en ligne université de Rennes
        </Link>,
        <Link to="/home" key={type + "4"}>
          Compte lecteur
        </Link>
      ];
      break;
    case "vie":
      childs = [
        <Link to="/home" key={type + "1"}>
          Politiques d'établissement
        </Link>,
        <Link to="/home" key={type + "2"}>
          RGPD
        </Link>
      ];
      break;
    case "help":
      childs = [
        <Link to="/home" key={type + "1"}>
          SOS
        </Link>,
        <Link to="/home" key={type + "2"}>
          Documentation informatique
        </Link>
      ];
      break;
  }

  return (
    <div className="tooltip" css={css(tooltipCss)}>
      {childs}
    </div>
  );
}
