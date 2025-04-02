import React, { useState } from "react";
import "./Components.scss";
import {
  AdministratorOpt,
  StudentOpt,
  CoordinatorOpt,
  GestorOpt,
} from "./SidebarList";
import { Link, useLocation } from "react-router";
import { useSidebar } from "../Layouts/SidebarContext";

const Sidebar = () => {
  const { isOpen, setIsOpen, openSubmenu, setOpenSubmenu } = useSidebar();
  const location = useLocation();

  const selOpt = (num: number) => {
    console.log(isOpen, num);
    isOpen === num ? setIsOpen(0) : setIsOpen(num);
  };

  console.log(location.pathname);

  const detectRoute = (selected: number, item: any) => {
    if (selected === item.pos) {
      console.log(selected, item);
      return true;
    }
  };

  const checkPosChild = (selected: number, item: any) => {
    console.log(selected, item);
    if (selected === item.pos) {
      return true;
    }
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
                    <Link
                      to={item.href}
                      className={`geex-sidebar__menu__link ${
                        detectRoute(isOpen, item) && "active"
                      }`}
                      onClick={(e) => {
                        selOpt(index);
                        setOpenSubmenu(-1);
                      }}
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </Link>
                  </li>
                  {isOpen === index && item.submenu.length > 0 && (
                    <ul className="geex-sidebar__submenu">
                      {item.submenu?.map((itemTwo, index) => {
                        return (
                          <li className="geex-sidebar__menu__item">
                            <Link
                              className={`geex-sidebar__menu__link ${
                                checkPosChild(openSubmenu, itemTwo) && "active"
                              }`}
                              to={itemTwo.href}
                              onClick={(e) => {
                                setOpenSubmenu(index);
                              }}
                            >
                              {itemTwo.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
    // End Sidebar
  );
};

export default Sidebar;
