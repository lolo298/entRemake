import { LoginProps } from "Login";
import { useEffect } from "react";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { Nav, LoginForm, Personnel } from "./LoginComps";
import { app, loginContent, btnLong } from "./LoginComps";
import { updateNav, getMobileMenu } from "../store";

export function Login(props: LoginProps) {
  if (getMobileMenu()) {
    app.filter = "brightness(0.5)";
    app.pointerEvents = "none";
  } else {
    app.filter = "brightness(1)";
    app.pointerEvents = "auto";
  }

  return (
    <div id="app" css={css(app)}>
      <Nav />
      <div id="login-content" css={css(loginContent)}>
        <LoginForm />
        <p id="autresMethodes">OU</p>
        <Link to={"/home"} css={css(btnLong)} onClick={() => updateNav("Home")}>
          Se connecter avec sesame
        </Link>
        <Personnel />
      </div>
    </div>
  );
}
