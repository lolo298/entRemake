import { css } from "@emotion/react";
import { Link } from "react-router-dom";

export function ToolTip(props) {
  console.log(props.passCss);
  const passCss = props.passCss;
  let tooltipCss = {
    color: "red",
    display: "none",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: "1rem",
    width: "max-content",
    position: "absolute",
    top: "100%",
    left: "0",
    backgroundColor: "white",
    boxShadow: "0 0 5px 0 rgba(0,0,0,0.5)",
    padding: "20%",
    ...(passCss ? passCss : {}),
  };

  const type = props.type;

  let childs;

  switch (type) {
    case "bureau":
      childs = [
        <Link to="/home">Mon emploi du temps</Link>,
        <Link to="/home">Mon dossier étudiant</Link>,
        <Link to="/home">Mettre un fichier en ligne</Link>,
        <Link to="/home">Ma messagerie</Link>,
        <Link to="/home">Mon espace document</Link>,
        <Link to="/home">Annuaire université de Rennes</Link>,
        <Link to="/home">Mes abonnements aux listes de diffusion d'étudiants</Link>,
      ];
      break;
    case "intranet":
      childs = [
        <Link to="/home">Accéder au portail étudiants</Link>,
        <Link to="/home">Mes notes</Link>,
      ];
      break;
    case "formation":
      childs = [
        <Link to="/home">Moodle</Link>,
        <Link to="/home">Offre de stage, d'alternance et emplois</Link>,
        <Link to="/home">Klaxoon</Link>,
        <Link to="/home">Pix</Link>,
        <Link to="/home">Cours a l'international</Link>,
      ];
      break;
    case "biblio":
      childs = [
        <Link to="/home">Vos Bibliothèques</Link>,
        <Link to="/home">Supernova</Link>,
        <Link to="/home">Synthèses - Thèses en ligne université de Rennes</Link>,
        <Link to="/home">Compte lecteur</Link>,
      ];
      break;
    case "vie":
      childs = [<Link to="/home">Politiques d'établissement</Link>, <Link to="/home">RGPD</Link>];
      break;
    case "help":
      childs = [<Link to="/home">SOS</Link>, <Link to="/home">Documentation informatique</Link>];
      break;
  }

  return (
    <div className="tooltip" css={css(tooltipCss)}>
      {childs}
    </div>
  );
}