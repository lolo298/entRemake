import React from "react";
import "./css/login.css";

function Login() {
  return (
    <div id="login-content">
      <form action="#" id="loginForm">
        <label htmlFor="login" className="loginInputLabel">
          <span>Identifiant</span>
          <input type="text" name="login" id="login" className="loginInput" />
        </label>
        <label htmlFor="password" className="loginInputLabel">
          <span>Mot de passe</span>
          <input type="password" name="password" id="password" className="loginInput" />
        </label>
        <a href="">Identifiant oublié ?</a>
        <a href="">Mot de passe oublié ?</a>
        <button type="submit" className="btnLong">
          Se connecter
        </button>
      </form>
      <p id="autresMethodes">D'autres façons de se connecter :</p>
      <a href="" className="btnLong">
        Se connecter avec sesame
      </a>
      <div id="personnel">
        <header
          onClick={(e) => {
            if (e.target instanceof HTMLElement) {
              window.open(e.target.querySelector("a").href, "_blank");
            }
          }}
        >
          <a href="https://youtu.be/dQw4w9WgXcQ">Le portail du personnel et des étudiants</a>
        </header>
        <div id="personnel-content">
          <p>Viens découvrir des infos utiles sur la vie de tous les jours !</p>
          <div className="img-container">
            <img
              src="https://images.unsplash.com/photo-1678135487929-0153e7eaf6e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
              alt="image 1"
            />
            <img
              src="https://images.unsplash.com/photo-1677966039656-a681a0fe59b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
              alt="image 2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
