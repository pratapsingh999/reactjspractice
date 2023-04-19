import { NavLink  } from "react-router-dom";
import "../App.css";
import React from "react";

// import { NavLink } from "react-router-dom/cjs/react-router-dom.min";


function Practice(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink  className="nav-link" activeClassName="active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink  className="nav-link" activeClassName="active" to="/about">
                   About
                </NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>

               <div className="d-flex">
                <div className="bg-primary rounded mx-2" onClick={() => props.PratapSingh("primary")} 
                style={{height:"30px", width:"30px" , cursor:"pointer"}}></div>
                <div className="bg-secondary rounded mx-2" onClick={() => props.PratapSingh("secondary")} 
                style={{height:"30px", width:"30px" , cursor:"pointer"}}></div>
                <div className="bg-success rounded mx-2" onClick={() => props.PratapSingh("success")} 
                style={{height:"30px", width:"30px" , cursor:"pointer"}}></div>
                <div className="bg-danger rounded mx-2" onClick={() => props.PratapSingh("danger")} 
                style={{height:"30px", width:"30px" , cursor:"pointer"}}></div>
                 <div className="bg-warning rounded mx-2" onClick={() => props.PratapSingh("warning")} 
                style={{height:"30px", width:"30px" , cursor:"pointer"}}></div>
                 <div className="bg-info rounded mx-2" onClick={() => props.PratapSingh("info")} 
                style={{height:"30px", width:"30px" , cursor:"pointer"}}></div>
               </div>

            </form>
            <div
              className={`form-check form-switch mx-4 text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                // onClick={props.togalmode}
                // onClick={() => {props.PratapSingh(null)}}
                onClick={() => {props.togalmode(null)}}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Enable Dark mode
              </label>
            </div>

            <div
              className={`form-check form-switch mx-4 text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                onClick={props.toggelmode}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Enable yellow mode
              </label>
            </div>

            <div
              className={`form-check form-switch mx-4 text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                onClick={props.toggelsmode}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Enable pink mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Practice;
