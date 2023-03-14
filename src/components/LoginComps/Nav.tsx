import { Link } from "react-router-dom";
import { NavCss } from "../cssGlobs";
import { updateNav } from "../../store";

export function Nav(props) {
  return (
    <nav css={NavCss}>
      <ul>
        <Link to="/home" onClick={() => updateNav("Home")}>
          Emplois du temps
        </Link>
        <Link to="/home" onClick={() => updateNav("Home")}>
          Actes administratifs
        </Link>
        <Link to="/home" onClick={() => updateNav("Home")}>
          Annuaire
        </Link>
        <Link to="/home" onClick={() => updateNav("Home")}>
          Assistance
        </Link>
      </ul>
    </nav>
  );
}
