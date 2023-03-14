import { css } from "@emotion/react";
import { Link } from "react-router-dom";

export function FooterCard(props) {
  let childs: JSX.Element[] = [];
  const type = props.type;

  switch (type) {
    case "bureau":
      childs = [
        <Link to="/home" key="tmp">
          Mon emploi du temps
        </Link>,
        <Link to="/home" key="etu">
          Mon dossier étudiant
        </Link>,
        <Link to="/home" key="cloud">
          Mettre un fichier en ligne
        </Link>,
        <Link to="/home" key="msg">
          Ma messagerie
        </Link>,
        <Link to="/home" key="docs">
          Mon espace document
        </Link>,
        <Link to="/home" key="annuaire">
          Annuaire université de Rennes
        </Link>,
        <Link to="/home" key="mooc">
          Mes abonnements aux listes de diffusion d'étudiants
        </Link>
      ];
      break;
    case "intranet":
      childs = [
        <Link to="/home" key="portail">
          Accéder au portail étudiants
        </Link>,
        <Link to="/home" key="notes">
          Mes notes
        </Link>
      ];
      break;
    case "formation":
      childs = [
        <Link to="/home" key="moodle">
          Moodle
        </Link>,
        <Link to="/home" key="alt">
          Offre de stage, d'alternance et emplois
        </Link>,
        <Link to="/home" key="klaxoon">
          Klaxoon
        </Link>,
        <Link to="/home" key="pix">
          Pix
        </Link>,
        <Link to="/home" key="international">
          Cours a l'international
        </Link>
      ];
      break;
    case "biblio":
      childs = [
        <Link to="/home" key="biblio">
          Vos Bibliothèques
        </Link>,
        <Link to="/home" key="supernova">
          Supernova
        </Link>,
        <Link to="/home" key="synthese">
          Synthèses - Thèses en ligne université de Rennes
        </Link>,
        <Link to="/home" key="lecteur">
          Compte lecteur
        </Link>
      ];
      break;
    case "vie":
      childs = [
        <Link to="/home" key="politique">
          Politiques d'établissement
        </Link>,
        <Link to="/home" key="rgpd">
          RGPD
        </Link>
      ];
      break;
    case "help":
      childs = [
        <Link to="/home" key="sos">
          SOS
        </Link>,
        <Link to="/home" key="docu">
          Documentation informatique
        </Link>
      ];
      break;
  }

  const separator = {
    width: "80%",
    height: "1px",
    backgroundColor: "rgba(0,0,0,0.2)",
    margin: "10px 0",
  };

  const cardCss = {
    display: "flex",
    flexDirection: "column" as "column",
    alignItems: "flex-start",
    justifyContent: "center",
    warp: "wrap",
    "h2": {
      color: "#FAA61A",
      fontWeight: "100",
    },
    "a": {
      color: "#000",
      textDecoration: "none",
      "&:visited":{
        color: "#000",
      }
    }
  };

  return (
    <div className="footer-card" css={css(cardCss)}>
      <h2>{type}</h2>
      <span css={css(separator)}></span>
      {childs}
    </div>
  )
}