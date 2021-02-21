import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavTabs.css";

function NavTabs() {
  const [location, setLocation] = useState();
  console.log ("location", location);

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={{location} === "/" ? "nav-link active" : "nav-link"} onClick={ () => setLocation("/")} data-toggle="pill" >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/about" className={{location} === "/about" ? "nav-link active" : "nav-link"}onClick={ () => setLocation("/about")} data-toggle="pill">
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/project" className={{location} === "/project" ? "nav-link active" : "nav-link"}onClick={ () => setLocation("/project")} data-toggle="pill">
          Projects
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
