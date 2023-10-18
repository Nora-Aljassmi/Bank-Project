import React, { useContext, useState } from "react";
import "./login.css";
import logo from "../../pics/sub.png";
import { useMutation } from "@tanstack/react-query";
import { logInUser } from "../../components/api/auth";
import userContext from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const [LogInUserName, setLogInUserName] = useState("");
  const [LogInUserPassword, setLogInUserPassword] = useState("");
  const { user, setUser } = useContext(userContext);
  const navigate = useNavigate();
  const LogInUserNameHandler = (e) => {
    setLogInUserName(e.target.value);
  };
  const LogInUserPasswordHandler = (e) => {
    setLogInUserPassword(e.target.value);
  };
  const { mutate } = useMutation({
    mutationKey: ["logIn"],
    mutationFn: () => logInUser(LogInUserName, LogInUserPassword),
    onSuccess: () => {
      setUser(true);
      navigate("/");
    },
  });
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit} className="form_style">
        <div className="form_rest">
          <img src={logo} />
          <div className="form_label">
            <label>Login</label>
          </div>
          <div className="form_user">
            <h4>User name</h4>
            <input
              onChange={LogInUserNameHandler}
              name="userName"
              required
              placeholder="user name"
              type="text"
            />
          </div>
          <div className="form_password">
            <h4>password</h4>
            <input
              onChange={LogInUserPasswordHandler}
              name="userName"
              required
              placeholder="password"
              type="password"
            />
          </div>
          <div className="form_button">
            <button onClick={mutate} type="submit">
              login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
