import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { NavbarData } from "./navbarData";
import "./navbar.css";
function Navbar() {
  const [clicked, setClicked] = useState(false);

  const renderNavbarList = NavbarData.map((data, index) => {
    return (
      <li key={index}>
        <NavLink to={data.path} exact activeClassName="active">
          {data.name}
        </NavLink>
      </li>
    );
  });
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <nav>
      <div className="logo">
        Happy <p>Family</p>
      </div>
      <div className="menu-icon" onClick={handleClick}>
        <i className={clicked ? "fa fa-times" : "fa fa-bars"}></i>
      </div>
      <ul className={clicked ? "navbar-list" : "navbar-list close"}>
        {renderNavbarList}
      </ul>
    </nav>
  );
}

export default Navbar;
