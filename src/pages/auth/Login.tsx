import React from "react";
import { useNavigate } from "react-router";
import BlankLayout from "../../Layouts/BlankLayout";
import "./Auth.scss";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para manejar el submit del formulario
    console.log("Formulario enviado");
    navigate("/dashboard");
  };

  return (
    <BlankLayout>
      <main className="p-4" style={{ height: "100vh" }}>
        <div className="geex-content__authentication">
          <div className="geex-content__authentication__img figure-log">
            {/* F */}
          </div>
          <div className="geex-content__authentication__content">
            <div className="geex-content__authentication__content__wrapper">
              <div className="geex-content__authentication__content__logo">
                <img className="logo" src="assets/img/logo.svg" alt="logo" />
              </div>
              <form
                id="signInForm"
                className="geex-content__authentication__form"
                onSubmit={handleSubmit}
              >
                <h1 className="geex-content__authentication__title m-1">
                  Ingresa a tu cuenta
                </h1>
                <h5 className="geex-content__authentication__desc">
                  Bienvenido a Student Retention Analytics
                </h5>
                <div className="geex-content__authentication__form-group">
                  <label htmlFor="emailSignIn">Correo electrónico</label>
                  <input
                    type="email"
                    id="emailSignIn"
                    name="emailSignIn"
                    placeholder="Ingresa tu correo"
                    required
                  />
                  <i className="uil-envelope"></i>
                </div>
                <div className="geex-content__authentication__form-group">
                  <div className="geex-content__authentication__label-wrapper geex-content__terms">
                    <label htmlFor="loginPassword">Contraseña</label>
                    <a href="recuperar" style={{ color: 'var(--primary-color)' }}>¿Olvidaste tu contraseña?</a>
                  </div>
                  <input
                    type="password"
                    id="loginPassword"
                    name="loginPassword"
                    placeholder="Contraseña"
                    required
                  />
                  <i className="uil-eye toggle-password-type"></i>
                </div>
                <button
                  type="submit"
                  className="geex-content__authentication__form-submit"
                >
                  Iniciar Sesión
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="footer-login">
          <img src="./assets/img/footer-login.svg" alt="" />
        </div>
      </main>
    </BlankLayout>
  );
};

export default Login;
