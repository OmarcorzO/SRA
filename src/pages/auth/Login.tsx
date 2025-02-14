import React from 'react'
import { useNavigate } from "react-router";
import BlankLayout from "../../Layouts/BlankLayout";

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
      <main className="geex-content">
        <div className="geex-content__authentication">
          <div className="geex-content__authentication__content">
            <div className="geex-content__authentication__content__wrapper">
              <div className="geex-content__authentication__content__logo">
                <a href="index.php">
                  <img
                    className="logo"
                    src="assets/img/logo.png"
                    alt="logo"
                  />
                </a>
              </div>
              <form
                id="signInForm"
                className="geex-content__authentication__form"
                onSubmit={handleSubmit}
              >
                <h2 className="geex-content__authentication__title">
                  Sign In to Your Account 👋
                </h2>
                <div className="geex-content__authentication__form-group">
                  <label htmlFor="emailSignIn">Your Email</label>
                  <input
                    type="email"
                    id="emailSignIn"
                    name="emailSignIn"
                    placeholder="Enter Your Email"
                    required
                  />
                  <i className="uil-envelope"></i>
                </div>
                <div className="geex-content__authentication__form-group">
                  <div className="geex-content__authentication__label-wrapper">
                    <label htmlFor="loginPassword">Your Password</label>
                    <a href="recuperar">Forgot Password?</a>
                  </div>
                  <input
                    type="password"
                    id="loginPassword"
                    name="loginPassword"
                    placeholder="Password"
                    required
                  />
                  <i className="uil-eye toggle-password-type"></i>
                </div>
                <button
                  type="submit"
                  className="geex-content__authentication__form-submit"
                >
                  Sign In
                </button>
              </form>
            </div>
          </div>
          <div className="geex-content__authentication__img">
            <img src="./assets/img/authentication.svg" alt="" />
          </div>
        </div>
      </main>
    </BlankLayout>
  );
};

export default Login;
