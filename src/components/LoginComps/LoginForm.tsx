import { LoginProps } from "Login";
import { Link } from "react-router-dom";
import { loginLabel, btnLong, oubli, loginForm } from "./css";
import { store } from "../../store";

export function LoginForm(props: LoginProps) {
  function handleNavUpdate(page: string) {
    store.dispatch({ type: "SET_PAGE", payload: page });
  }

  function handleLabelPlaceholder(e) {
    console.log(e);
    if (e.target instanceof HTMLInputElement) {
      if (e.type === "focus" && !e.target.value) {
        let input = e.target;
        let label = input.previousElementSibling;

        let keyframes = [{ transform: "translateY(0)" }, { transform: "translateY(-150%)" }];
        let options = {
          duration: 200,
          easing: "ease-in-out",
          fill: "forwards",
        };
        label.animate(keyframes, options);
      }
      if (e.type === "blur" && e.target.value === "") {
        console.log("blur");
        let input = e.target;
        let label = input.previousElementSibling;

        let keyframes = [{ transform: "translateY(-150%)" }, { transform: "translateY(0)" }];
        let options = {
          duration: 200,
          easing: "ease-in-out",
          fill: "forwards",
        };
        label.animate(keyframes, options);
      }
    }
  }

  return (
    <form action="#" id="loginForm" css={loginForm}>
      <label htmlFor="login" css={loginLabel}>
        <span>Identifiant</span>
        <input
          type="text"
          name="login"
          id="login"
          className="loginInput"
          onFocus={handleLabelPlaceholder}
          onBlur={handleLabelPlaceholder}
        />
      </label>
      <label htmlFor="password" css={loginLabel}>
        <span>Mot de passe</span>
        <input
          type="password"
          name="password"
          id="password"
          className="loginInput"
          onFocus={handleLabelPlaceholder}
          onBlur={handleLabelPlaceholder}
        />
      </label>
      <div css={oubli}>
        <a href="https://youtu.be/dQw4w9WgXcQ">Identifiant oublié ?</a>
        <a href="https://youtu.be/dQw4w9WgXcQ">Mot de passe oublié ?</a>
      </div>
      <Link to={"/home"} css={btnLong} onClick={() => handleNavUpdate("Home")}>
        Se connecter
      </Link>
    </form>
  );
}
