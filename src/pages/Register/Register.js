import React, { useState } from "react";
import logo from "../../pics/sub.png";
import "./Register.css";
import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../../components/api/auth";
const Register = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userImage, setUserImage] = useState(null);
  const { mutate } = useMutation({
    mutationKey: ["register"],
    mutationFn: () => registerUser(userName, userPassword, userImage),
  });
  const userNameHandler = (e) => {
    setUserName(e.target.value);
  };
  const userPasswordHandler = (e) => {
    setUserPassword(e.target.value);
  };
  const userImageHandler = (e) => {
    const selectedImage = e.target.files[0];
    setUserImage(selectedImage);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div>
        <form onSubmit={handleFormSubmit} className="reg_form_style">
          <div className="reg_form_rest">
            <img src={logo} />
            <div className="reg_form_label">
              <label>Registeration</label>
            </div>
            <div className="reg_form_user">
              <h4>User name</h4>
              <input
                onChange={userNameHandler}
                placeholder="user name"
                type="text"
                name="userName"
                required
              />
            </div>
            <div className="reg_form_password">
              <h4>password</h4>
              <input
                onChange={userPasswordHandler}
                placeholder="password"
                type="password"
                name="password"
                required
              />
            </div>
            <div className="reg_form_image">
              <input
                name="image"
                required
                onChange={userImageHandler}
                type="file"
              />
            </div>
            <div className="reg_form_button">
              <button onClick={mutate} type="submit">
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
