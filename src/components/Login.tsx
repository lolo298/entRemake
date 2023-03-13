import { LoginProps } from "Login";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Nav,LoginForm, Personnel } from "./LoginComps";
import { app, loginContent, btnLong } from "./LoginComps";


export function Login(props: LoginProps) {
  function handleNavUpdate(page: string) {
    document.cookie = `page=${page}`;
    props.updateNav(page);
  }
  document.cookie = `page=login`;

  return (
    <div id="app" css={app}>
      <Nav updateNav={handleNavUpdate} />
      <div id="login-content" css={loginContent}>
        <LoginForm updateNav={handleNavUpdate} />
        <p id="autresMethodes">OU</p>
        <Link to={"/home"} css={btnLong} onClick={() => handleNavUpdate("home")}>
          Se connecter avec sesame
        </Link>
        <Personnel updateNav={handleNavUpdate} />
      </div>
    </div>
  );
}
