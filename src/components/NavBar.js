import { hover } from "@testing-library/user-event/dist/hover";
import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import userContext from "../context/UserContext";
const NavBar = () => {
  const { user, setUser } = useContext(userContext);
  const logOutHandler = () => {
    setUser(false);
    localStorage.removeItem("token");
  };
  return (
    <div className="main_style">
      <NavLink className="active" to="/">
        Home
      </NavLink>
      <NavLink className="active" to="/profile">
        Profile
      </NavLink>
      <NavLink className="active" to="/users">
        Users
      </NavLink>
      {user ? (
        <button className="logOut" onClick={logOutHandler}>
          Log out
        </button>
      ) : (
        <>
          <NavLink className="active" to="/logIn">
            Login
          </NavLink>
          <NavLink className="active" to="/register">
            Register
          </NavLink>
        </>
      )}
    </div>
  );
};

export default NavBar;
