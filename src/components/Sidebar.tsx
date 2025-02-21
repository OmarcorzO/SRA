import React from 'react'

const Sidebar = () => {
  return (
    // Sidebar
    <nav className="sidebar" data-trigger="scrollbar">
      <div className="sidebar-header d-none d-lg-block">
        <div className="sidebar-toogle-pin">
          <i className="icofont-tack-pin"></i>
        </div>
      </div>

      <div className="sidebar-body">
        <ul className="nav">
          <li className="nav-category">Main</li>
          <li>
            <a href="/dashboard">
              <i className="icofont-pie-chart"></i>
              <span className="link-title">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="/instrumento">
              <i className="icofont-shopping-cart"></i>
              <span className="link-title">Caracterización</span>
            </a>
          </li>
          <li>
            <a href="/analiticas">
              <i className="icofont-chart-histogram"></i>
              <span className="link-title">Analíticas</span>
            </a>
          </li>
          <li className="nav-category">Examples</li>
          <li className="nav-category">Test</li>
          <li>
            <a href="#">
              <i className="icofont-mail-box"></i>
              <span className="link-title">Email</span>
            </a>
            <ul className="nav sub-menu">
              <li>
                <a href="/email/inbox">Inbox</a>
              </li>
              <li>
                <a href="/email/read">Read</a>
              </li>
              <li>
                <a href="/email/compose">Compose</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/chat">
              <i className="icofont-wechat"></i>
              <span className="link-title">Chat</span>
            </a>
          </li>
          <li>
            <a href="/calendar">
              <i className="icofont-calendar"></i>
              <span className="link-title">Calendar</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    // End Sidebar
  );
};

export default Sidebar;
