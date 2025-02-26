import React from 'react'

const Header = () => {
  return (
    // Header
    <header className="header white-bg fixed-top d-flex align-content-center flex-wrap">
      <div className="logo">
        <a href="/" className="default-logo">
          <img src="assets/img/logo.svg" alt="Logo" />
        </a>
        <a href="/" className="mobile-logo">
          <img src="assets/img/mobile-logo.svg" alt="Mobile Logo" />
        </a>
      </div>

      <div className="main-header">
        <div className="container-fluid">
          <div className="row justify-content-between">
            <div className="col-3 col-lg-1 col-xl-4">
              <div className="main-header-left h-100 d-flex align-items-center">
                <div className="main-header-user">
                  <a href="#" className="d-flex align-items-center">
                    <div className="menu-icon">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <div className="user-profile d-xl-flex align-items-center d-none">
                      <div className="user-avatar">
                        <img
                          src="assets/img/avatar/user.png"
                          alt="User"
                        />
                      </div>
                      <div className="user-info">
                        <h4 className="user-name">Abrilay Khatun</h4>
                        <p className="user-email">abrilakh@gmail.com</p>
                      </div>
                    </div>
                  </a>
                  <div className="dropdown-menu">
                    <a href="#">My Profile</a>
                    <a href="#">Task</a>
                    <a href="#">Settings</a>
                    <a href="#">Log Out</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-9 col-lg-11 col-xl-8">
              <div className="main-header-right d-flex justify-content-end">
                <ul className="nav">
                  <li>
                    <div className="main-header-language">
                      <a href="#">
                        <img
                          src="../../../assets/img/svg/globe-icon.svg"
                          alt="Language"
                        />
                      </a>
                      <div className="dropdown-menu style--three">
                        {[
                          "usa",
                          "china",
                          "russia",
                          "spain",
                          "brazil",
                          "france",
                          "algeria",
                        ].map((country) => (
                          <a href="#" key={country}>
                            <span>
                              <img
                                src={`../../../assets/img/${country}.png`}
                                alt={country}
                              />
                            </span>
                            {country.charAt(0).toUpperCase() + country.slice(1)}
                          </a>
                        ))}
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="main-header-message">
                      <a href="#" className="header-icon">
                        <img
                          src="../../../assets/img/svg/message-icon.svg"
                          alt="Messages"
                        />
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="main-header-notification">
                      <a href="#" className="header-icon notification-icon">
                        <span className="count">22</span>
                        <img
                          src="../../../assets/img/svg/notification-icon.svg"
                          alt="Notifications"
                        />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    // End Header
  );
};

export default Header;
