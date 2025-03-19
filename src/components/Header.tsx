import React from "react";

const Header = ({title = '', desc = ''}) => {
  return (
    // Header
    <header className="geex-header">
      <div className="geex-header__wrapper">
        <div>
          <h2 className="semi-bold rw-font">{title}</h2>
          <h6 className="rw-font">
            {desc}
          </h6>
        </div>
        <nav className="geex-header__menu-wrapper">
          <ul className="geex-header__menu">
            <li className="geex-header__menu__item has-children">
              <a href="#" className="geex-header__menu__link">
                <span>Demo</span>
              </a>
              <ul className="geex-header__submenu">
                <li className="geex-header__menu__item">
                  <a href="/" className="geex-header__menu__link">
                    Server Management
                  </a>
                </li>
                <li className="geex-header__menu__item">
                  <a href="/banking" className="geex-header__menu__link">
                    Banking
                  </a>
                </li>
                <li className="geex-header__menu__item">
                  <a href="/crypto" className="geex-header__menu__link">
                    Crypto
                  </a>
                </li>
                <li className="geex-header__menu__item">
                  <a href="/invoicing" className="geex-header__menu__link">
                    Invoicing
                  </a>
                </li>
              </ul>
            </li>
            {/* Puedes seguir agregando más menús de la misma forma */}
          </ul>
        </nav>
        
      </div>
    </header>
    // End Header
  );
};

export default Header;
