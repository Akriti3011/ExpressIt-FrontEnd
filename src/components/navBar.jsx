import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class Navbar extends Component {
  state = { collapsed: true };

  handleCollapse = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  render() {
    let collapsed = this.state.collapsed;
    let classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";
    return (
      <nav className="nav navbar-expand-lg sticky-top navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          ExpressIt
        </Link>
        <button
          className={classTwo}
          type="button"
          onClick={this.handleCollapse}
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={classOne} id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link" to="/home">
              Home
            </NavLink>
            <NavLink className="nav-item nav-link" to="/discuss">
              Discuss
            </NavLink>
            <NavLink className="nav-item nav-link" to="/login">
              Login
            </NavLink>
            <NavLink className="nav-item nav-link" to="/register">
              Register
            </NavLink>
            <NavLink className="nav-item nav-link" to="/about">
              About
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
