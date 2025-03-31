import React from "react";
import "./Components.scss";
import {
  AdministratorOpt,
  StudentOpt,
  CoordinatorOpt,
  GestorOpt,
} from "./SidebarList";


const Sidebar = () => {
  const [isOpen, setIsOpen] = React.useState(0);

  const selOpt = (num: number) => {
    console.log(isOpen, num);
    isOpen === num ? setIsOpen(0) : setIsOpen(num);
  };

  return (
    // Sidebar
    <div className="geex-sidebar">
      <a href="#" className="geex-sidebar__close">
        <i className="uil uil-times"></i>
      </a>
      <div className="geex-sidebar__wrapper">
        <div className="geex-sidebar__header">
          <a href="/" className="geex-sidebar__logo">
            <img
              className="logo-lite logo-lg"
              src="assets/img/logo.svg"
              alt="logo"
              width={200}
            />
            <img
              className="logo-dark"
              src="/assets/img/logo-lite.svg"
              alt="logo"
            />
          </a>
          <a href="/" className="geex-sidebar__logo">
            <img
              className="logo-lite logo-sm"
              src="assets/img/mobile-logo.svg"
              alt="logo"
            />
            <img
              className="logo-dark"
              src="/assets/img/mobile-logo.svg"
              alt="logo"
            />
          </a>
        </div>
        <nav className="geex-sidebar__menu-wrapper">
          <ul className="geex-sidebar__menu">
            {StudentOpt.map((item, index) => {
              return (
                <>
                  <li key={index} className="geex-sidebar__menu__item">
                    <a
                      href="#"
                      className="geex-sidebar__menu__link"
                      onClick={(e) => {
                        e.preventDefault();
                        selOpt(index);
                      }}
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </a>
                  </li>
                  {isOpen === index && item.submenu.length > 0 && (
                    <ul className="geex-sidebar__submenu">
                      {item.submenu?.map((item, index) => {
                        return (
                          <li className="geex-sidebar__menu__link">
                            <a href={item.href}>{item.name}</a>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </>
              );
            })}
            {/* <li className="geex-sidebar__menu__item has-children">
              <a
                href="#"
                className="geex-sidebar__menu__link"
                onClick={(e) => {
                  e.preventDefault();
                  selOpt(1);
                }}
              >
                <span>Demo</span>
              </a>
              {isOpen === 1 && (
                <ul className="geex-sidebar__submenu">
                  <li className="geex-sidebar__menu__link">
                    <a href="/instrumento">Instrumento</a>
                  </li>
                  <li className="geex-sidebar__menu__link">
                    <a href="/banking">Banking</a>
                  </li>
                  <li className="geex-sidebar__menu__link">
                    <a href="/crypto">Crypto</a>
                  </li>
                  <li className="geex-sidebar__menu__link">
                    <a href="/invoicing">Invoicing</a>
                  </li>
                </ul>
              )}
            </li>
            <li className="geex-sidebar__menu__item has-children">
              <a
                href="#"
                className="geex-sidebar__menu__link"
                onClick={(e) => {
                  e.preventDefault();
                  selOpt(2);
                }}
              >
                <span>Layout</span>
              </a>
              {isOpen === 2 && (
                <ul className="geex-sidebar__submenu">
                  <li className="geex-sidebar__menu__link">
                    <a href="#" className="geex-customizer__btn--top">
                      Top Menu
                    </a>
                  </li>
                  <li className="geex-sidebar__menu__link">
                    <a href="#" className="geex-customizer__btn--side">
                      Side Menu
                    </a>
                  </li>
                  <li className="geex-sidebar__menu__link">
                    <a href="#" className="geex-customizer__btn--light">
                      Light Demo
                    </a>
                  </li>
                  <li className="geex-sidebar__menu__link">
                    <a href="#" className="geex-customizer__btn--dark">
                      Dark Demo
                    </a>
                  </li>
                </ul>
              )}
            </li> */}
          </ul>
        </nav>
      </div>
    </div>
    // End Sidebar
  );
};

export default Sidebar;
