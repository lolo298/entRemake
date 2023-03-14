import { LoginProps } from "Login";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Nav, LoginForm, Personnel } from "./LoginComps";
import { app, loginContent, btnLong } from "./LoginComps";
import { updateNav } from "../store";

export function Login(props: LoginProps) {
  return (
    <div id="app" css={app}>
      <Nav />
      <div id="login-content" css={loginContent}>
        <LoginForm />
        <p id="autresMethodes">OU</p>
        <Link to={"/home"} css={btnLong} onClick={() => updateNav("Home")}>
          Se connecter avec sesame
        </Link>
        <Personnel />
      </div>
    </div>
  );
}
