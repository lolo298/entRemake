import { Link } from "react-router-dom";
import { NavCss } from "../cssGlobs";
import { store } from "../../store";

export function Nav(props) {
  function handleNavUpdate(page: string) {
    store.dispatch({ type: "SET_PAGE", payload: page });
  }
  return (
    <nav css={NavCss}>
      <ul>
        <Link to="/home" onClick={() => handleNavUpdate("Home")}>
          Emplois du temps
        </Link>
        <Link to="/home" onClick={() => handleNavUpdate("Home")}>
          Actes administratifs
        </Link>
        <Link to="/home" onClick={() => handleNavUpdate("Home")}>
          Annuaire
        </Link>
        <Link to="/home" onClick={() => handleNavUpdate("Home")}>
          Assistance
        </Link>
      </ul>
    </nav>
  );
}
