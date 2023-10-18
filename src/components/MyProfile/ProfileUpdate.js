import React, { useState } from "react";
import "./ProfileUpdate.css";
import logo from "../../pics/sub.png";
import { useMutation } from "@tanstack/react-query";
import { updateMyProfile } from "../api/auth";
const ProfileUpdate = () => {
  const [updatedImage, setUpdatedImage] = useState(null);
  const { mutate } = useMutation({
    mutationKey: ["updateProfile"],
    mutationFn: () => updateMyProfile(updatedImage),
  });
  const updateImageHandler = (e) => {
    const selectedImage = e.target.files[0];
    setUpdatedImage(selectedImage);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit} className="update_form_style">
        <div className="update_form_card">
          <img src={logo} />
          <div className="update_form_label">
            <label>Profile Update</label>
          </div>
          <div className="update_form_file">
            <input
              onChange={updateImageHandler}
              name="image"
              required
              type="file"
            />
          </div>
          <div className="update_form_button">
            <button onClick={mutate} type="submit">
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfileUpdate;
