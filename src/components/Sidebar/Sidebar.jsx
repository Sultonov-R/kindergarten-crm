import React, { useState } from "react";
import "./Sidebar.css";
import "../../images/index.js";
import images from "../../images/index.js";
import { Link } from "react-router-dom";

function Sidebar() {
  const [activeItem, setActiveItem] = useState("Asosiy");

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <aside className="sidebar">
      <div className="logo">
        <img src={images.logo} alt="Logo" />
      </div>
      <nav className="menu">
        <ul>
          <li
            className={`menu-item ${activeItem === "Asosiy" ? "active" : ""}`}
            onClick={() => handleItemClick("Asosiy")}
          >
            <Link to="/">
              <img src={images.menu_icon} alt="Menu" />
              <span>Asosiy</span>
            </Link>
          </li>
          <li
            className={`menu-item ${
              activeItem === "O’quvchilar" ? "active" : ""
            }`}
            onClick={() => handleItemClick("O’quvchilar")}
          >
            <Link to="/students">
              <img src={images.doubleuser} alt="O'quvchilar" />
              <span>O’quvchilar</span>
            </Link>
          </li>
          <li
            className={`menu-item ${
              activeItem === "O’qituvchilar" ? "active" : ""
            }`}
            onClick={() => handleItemClick("O’qituvchilar")}
          >
            <Link to="/teacher">
              <img src={images.usersThree} alt="O'qituvchilar" />
              <span>O’qituvchilar</span>
            </Link>
          </li>
          <li
            className={`menu-item ${activeItem === "Guruhlar" ? "active" : ""}`}
            onClick={() => handleItemClick("Guruhlar")}
          >
            <Link to="/group">
              <img src={images.group} alt="Groups" />
              <span>Guruhlar</span>
            </Link>
          </li>
          <li
            className={`menu-item ${
              activeItem === "Ota-Onalar" ? "active" : ""
            }`}
            onClick={() => handleItemClick("Ota-Onalar")}
          >
            <Link to="/parents">
              <img src={images.parents} alt="Parents" />
              <span>Ota-Onalar</span>
            </Link>
          </li>
          <li
            className={`menu-item ${
              activeItem === "Hisobotlar" ? "active" : ""
            }`}
            onClick={() => handleItemClick("Hisobotlar")}
          >
            <Link to="/report">
              <img src={images.cashs} alt="Report" />
              <span>Hisobotlar</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="footer-menu">
        <ul>
          <li
            className={`menu-item ${activeItem === "Setting" ? "active" : ""}`}
            onClick={() => handleItemClick("Setting")}
          >
            <Link to="/setting">
              <img src={images.setting} alt="Settings" />
              <span>Sozlamalar</span>
            </Link>
          </li>
          <li
            className={`menu-item ${activeItem === "Logout" ? "active" : ""}`}
            onClick={() => handleItemClick("Logout")}
          >
            <Link to="/logout">
              <img src={images.logout} alt="Log Out" />
              <span>Chiqish</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
