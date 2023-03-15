import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { updateMobileMenu, updateNav } from "../../store";
import { separator } from "../cssGlobs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faFileCircleQuestion,
  faAddressBook,
  faInfoCircle,
  faHome,
  faGlobe,
  faGraduationCap,
  faBookOpen,
  faBuilding
} from "@fortawesome/free-solid-svg-icons";
import { Account } from "../NavbarComps";

updateMobileMenu(false);

export function ToolTip(props) {
  const passCss = props.passCss;
  let tooltipCss = {
    zIndex: 100,
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
  function handleNavClick(e) {
    document.querySelectorAll(".tooltip").forEach((tooltip: HTMLElement) => {
      tooltip.style.display = "none";
    });
    let target = e.target as HTMLElement;
    if (target.id !== "mainNav") {
      updateMobileMenu(false);
    }
    let tooltip = target.childNodes[1] as HTMLElement;
    let display = tooltip.style.display;
    tooltip.style.display = display === "none" || display === "" ? "flex" : "none";
    tooltip.style.top = "0";
    tooltip.style.left = "-80%";
    tooltip.style.width = "40%";
    tooltip.style.pointerEvents = "auto";
    tooltip.childNodes.forEach((child: HTMLElement) => {
      child.style.pointerEvents = "auto";
    });
  }

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
    case "home":
      tooltipCss.padding = "10%";
      tooltipCss.width = "40%";
      tooltipCss["*"] = {
        width: "100%"
      };
      childs = [
        <Account />,
        <Account type="logout" />,
        <span css={css(separator)}></span>,
        <div
          css={css({ "*": { pointerEvents: "none" } })}
          id="mainNav"
          onClick={(e) => handleNavClick(e)}
        >
          <p>
            <FontAwesomeIcon icon={faHome} css={css({ marginRight: "1rem" })} />
            Mon bureau
          </p>
          <ToolTip type="bureau" className="tooltipInternal" />
        </div>,
        <div
          css={css({ "*": { pointerEvents: "none" } })}
          id="mainNav"
          onClick={(e) => handleNavClick(e)}
        >
          <p>
            <FontAwesomeIcon icon={faGlobe} css={css({ marginRight: "1rem" })} />
            Intranet
          </p>
          <ToolTip type="intranet" className="tooltipInternal" />
        </div>,
        <div
          css={css({ "*": { pointerEvents: "none" } })}
          id="mainNav"
          onClick={(e) => handleNavClick(e)}
        >
          <p>
            <FontAwesomeIcon icon={faGraduationCap} css={css({ marginRight: "1rem" })} />
            Formation - Insertion pro
          </p>
          <ToolTip type="formation" className="tooltipInternal" />
        </div>,
        <div
          css={css({ "*": { pointerEvents: "none" } })}
          id="mainNav"
          onClick={(e) => handleNavClick(e)}
        >
          <p>
            <FontAwesomeIcon icon={faBookOpen} css={css({ marginRight: "1rem" })} />
            Bibliothèques
          </p>
          <ToolTip type="biblio" className="tooltipInternal" />
        </div>,
        <div css={css({ "*": { pointerEvents: "none" } })} onClick={(e) => handleNavClick(e)}>
          <p>
            <FontAwesomeIcon icon={faBuilding} css={css({ marginRight: "1rem" })} />
            Vie de l'établissement
          </p>
          <ToolTip type="vie" className="tooltipInternal" />
        </div>,
        <div css={css({ "*": { pointerEvents: "none" } })} onClick={(e) => handleNavClick(e)}>
          <p>
            <FontAwesomeIcon icon={faInfoCircle} css={css({ marginRight: "1rem" })} />
            Assistance
          </p>
          <ToolTip type="help" className="tooltipInternal" />
        </div>
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
  if (type === "home") {
    return (
      <div className="tooltipHome" css={css(tooltipCss)}>
        {childs}
      </div>
    );
  }
  return (
    <div className="tooltip" css={css(tooltipCss)}>
      {childs}
    </div>
  );
}
