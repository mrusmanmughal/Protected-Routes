import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../Style/navbar.css";
const Navbar = ({ data, logout, hide }) => {
  let loc = localStorage.getItem("user");
  console.log(loc);
  return (
    <>
      <header>
        <div className="logo">
          <Link to="/">Login-AUth-app</Link>
        </div>
        <ul className="nav">
          {data ? (
            <>
              <li className="nav-link">
                <Link to="/dashboard">Dashboard</Link>
              </li>

              <li onClick={logout}>Log-out</li>
            </>
          ) : (
            <li className="nav-link " hidden={hide}>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </header>
    </>
  );
};

export default Navbar;
