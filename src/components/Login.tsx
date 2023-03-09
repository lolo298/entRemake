import { LoginProps } from "Login";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { LoginForm, Personnel } from "./LoginComps";
import { app, loginContent, btnLong } from "./LoginComps";


export function Login(props: LoginProps) {
  function handleNavUpdate(page: string) {
    props.updateNav(page);
  }

  return (
    <div id="app" css={app}>
      <div id="login-content" css={loginContent}>
        <LoginForm updateNav={handleNavUpdate} />
        <p id="autresMethodes">D'autres façons de se connecter :</p>
        <Link to={"/home"} css={btnLong} onClick={() => handleNavUpdate("home")}>
          Se connecter avec sesame
        </Link>
        <Personnel />
      </div>
    </div>
  );
}
