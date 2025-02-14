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
            <a href="#">
              <i className="icofont-shopping-cart"></i>
              <span className="link-title">Ecommerce</span>
            </a>
            <ul className="nav sub-menu">
              <li>
                <a href="/ecommerce/dashboard1">Dashboard 1</a>
              </li>
              <li>
                <a href="/ecommerce/dashboard2">Dashboard 2</a>
              </li>
              <li>
                <a href="/ecommerce/orders">Orders</a>
              </li>
              <li>
                <a href="/ecommerce/products">Products Catalog</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/social-media">
              <i className="icofont-chart-histogram"></i>
              <span className="link-title">Social Media Analytics</span>
            </a>
          </li>
          <li className="nav-category">Apps</li>
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
