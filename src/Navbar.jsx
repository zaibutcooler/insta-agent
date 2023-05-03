import React from "react";
import "bulma/css/bulma.css";
import "bulma/css/bulma.min.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar is-dark">
      <div className="navbar-brand">
        <button className="button navbar-burger">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <NavLink to="/" className="navbar-item ">
            Blogs
          </NavLink>

          <NavLink to="/todolist" className="navbar-item">
            Todolist
          </NavLink>

          <a className="navbar-item" href="#">
            Contact
          </a>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-light" href="#">
                Sign up
              </a>
              <a className="button is-light" href="#">
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
