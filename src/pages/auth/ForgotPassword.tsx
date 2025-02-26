import React from "react";
import "./Auth.scss";
import BlankLayout from "../../Layouts/BlankLayout";

const ForgotPassword = () => {
  return (
    <BlankLayout>
      <main className="p-4" style={{ height: "100vh" }}>
        <div className="geex-content__authentication">
          <div className="geex-content__authentication__img figure-log">
            {/* <img src="./assets/img/authentication.svg" alt="" /> */}
          </div>
          <div className="geex-content__authentication__content">
            <div className="geex-content__authentication__content__wrapper">
              <div className="geex-content__authentication__content__logo">
                <a href="/">
                  <img className="logo" src="assets/img/logo.svg" alt="logo" />
                </a>
              </div>
              <form
                id="signInForm"
                className="geex-content__authentication__form"
              >
                <h1 className="geex-content__authentication__title m-1">
                  Recuperar contraseña
                </h1>
                <h6 className="geex-content__authentication__desc">
                  Ingrese el correo electrónico de su cuenta para restablecer la
                  contraseña. Recibirá un enlace por correo electrónico para
                  restablecer la contraseña.
                </h6>
                <div className="geex-content__authentication__form-group">
                  <label htmlFor="emailSignIn">Correo electrónico</label>
                  <input
                    type="email"
                    id="emailSignIn"
                    name="emailSignIn"
                    placeholder="Digite el correo electrónico de su cuenta"
                    required
                  />
                  <i className="uil-envelope"></i>
                </div>
                <button
                  type="submit"
                  className="geex-content__authentication__form-submit"
                >
                  Enviar código de recuperación
                </button>
                <div className="geex-content__terms">
                  ¿Ya tienes cuenta?
                  <a href="/"> Iniciar sesión</a>
                </div>
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

export default ForgotPassword;
