import React from "react";

const ForgotPassword = () => {
  return (
    <main className="geex-content">
      <div className="geex-content__authentication geex-content__authentication--forgot-password">
        <div className="geex-content__authentication__content">
          <div className="geex-content__authentication__content__wrapper">
            <div className="geex-content__authentication__content__logo">
              <a href="index.php">
                <img className="logo" src="assets/img/logo.png" alt="logo" />
              </a>
            </div>
            <form
              id="signInForm"
              className="geex-content__authentication__form"
            >
              <h2 className="geex-content__authentication__title">
                Forgot your password? 👋
              </h2>
              <p className="geex-content__authentication__desc">
                Please enter the email address associated with your account and
                we will email you a link to reset your password.
              </p>
              <div className="geex-content__authentication__form-group">
                <label htmlFor="emailSignIn">Email Address</label>
                <input
                  type="email"
                  id="emailSignIn"
                  name="emailSignIn"
                  placeholder="Enter Your Email"
                  required
                />
                <i className="uil-envelope"></i>
              </div>
              <button
                type="submit"
                className="geex-content__authentication__form-submit"
              >
                Forget Password
              </button>
              <a
                href="/"
                className="geex-content__authentication__form-submit return-btn"
              >
                Back to Login
              </a>
            </form>
          </div>
        </div>
        <div className="geex-content__authentication__img">
          <img src="/assets/img/authentication.svg" alt="Authentication" />
        </div>
      </div>
    </main>
  );
};

export default ForgotPassword;
