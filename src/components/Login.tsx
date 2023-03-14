import { LoginProps } from "Login";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Nav,LoginForm, Personnel } from "./LoginComps";
import { app, loginContent, btnLong } from "./LoginComps";
import { store } from "../store";

export function Login(props: LoginProps) {
  function handleNavUpdate(page: string) {
    store.dispatch({ type: "SET_PAGE", payload: page });
  }

  return (
    <div id="app" css={app}>
      <Nav updateNav={handleNavUpdate} />
      <div id="login-content" css={loginContent}>
        <LoginForm />
        <p id="autresMethodes">OU</p>
        <Link to={"/home"} css={btnLong} onClick={() => handleNavUpdate("Home")}>
          Se connecter avec sesame
        </Link>
        <Personnel />
      </div>
    </div>
  );
}
