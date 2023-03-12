import { Link } from "react-router-dom";
import { NavCss } from "./css";


export function Nav(props) {
  function handleNavUpdate(page: string) {
    props.updateNav(page);
  }
  return (
    <nav css={NavCss}>
      <ul>
        <Link to="/home" onClick={() => handleNavUpdate("home")}>
          Emplois du temps
        </Link>
        <Link to="/home" onClick={() => handleNavUpdate("home")}>
          Actes administratifs
        </Link>
        <Link to="/home" onClick={() => handleNavUpdate("home")}>
          Annuaire
        </Link>
        <Link to="/home" onClick={() => handleNavUpdate("home")}>
          Assistance
        </Link>
      </ul>
    </nav>
  );
}
