import React from 'react'

const Header = () => {
  return (
    // Header
    <header className="geex-header">
      <div className="geex-header__wrapper">
        <nav className="geex-header__menu-wrapper">
          <ul className="geex-header__menu">
            <li className="geex-header__menu__item has-children">
              <a href="#" className="geex-header__menu__link">
                <span>Demo</span>
              </a>
              <ul className="geex-header__submenu">
                <li className="geex-header__menu__item">
                  <a href="/" className="geex-header__menu__link">Server Management</a>
                </li>
                <li className="geex-header__menu__item">
                  <a href="/banking" className="geex-header__menu__link">Banking</a>
                </li>
                <li className="geex-header__menu__item">
                  <a href="/crypto" className="geex-header__menu__link">Crypto</a>
                </li>
                <li className="geex-header__menu__item">
                  <a href="/invoicing" className="geex-header__menu__link">Invoicing</a>
                </li>
              </ul>
            </li>
            {/* Puedes seguir agregando más menús de la misma forma */}
          </ul>
        </nav>
        <div className="geex-header__action">
          <div className="geex-header__action__item">
            <button className="geex-btn geex-btn__customizer">
              <i className="uil uil-pen"></i> 
              <span>Customizer</span>
            </button>
          </div>
        </div>
      </div>
    </header>
    // End Header
  );
};

export default Header;
