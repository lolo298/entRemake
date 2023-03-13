import { Link } from "react-router-dom";
import { NavCss } from "../cssGlobs";

export function Nav(props) {
  function handleNavUpdate(page: string) {
    document.cookie = `page=${page}`;
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
