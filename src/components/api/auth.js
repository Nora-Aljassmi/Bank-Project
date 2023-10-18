import { instance } from ".";
import jwtDecode from "jwt-decode";
import jwt_decode from "jwt-decode";

const registerUser = async (username, password, image) => {
  const formData = new FormData();
  formData.append("username", username);
  formData.append("password", password);
  formData.append("image", image);
  const response = await instance.post(
    "/mini-project/api/auth/register",
    formData
  );
  return response.data;
};
const storeToken = (token) => {
  localStorage.setItem("token", token);
};
const logInUser = async (username, password) => {
  const response = await instance.post("/mini-project/api/auth/login", {
    username,
    password,
  });
  storeToken(response.data?.token);
  return response.data;
};

const checkToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    const decode = jwt_decode(token);
    const cureentTime = Date.now() / 1000;
    if (decode.exp < cureentTime) {
      localStorage.removeItem("token");
      return false;
    }
    return true;
  }
  return false;
};
const getMyProfile = async () => {
  const response = await instance.get("/mini-project/api/auth/me");

  return response.data;
};

const updateMyProfile = async (image) => {
  const formData = new FormData();
  formData.append("image", image);
  const response = await instance.put("/mini-project/api/auth/profile", {
    formData,
  });
  return response.data;
};
const getAllUsers = async () => {
  const response = await instance.get("/mini-project/api/auth/users");
  return response.data;
};
const getUserById = async (id) => {
  const response = await instance.get(`/mini-project/api/auth/user/${id}`);
  return response.data;
};

export {
  registerUser,
  logInUser,
  getMyProfile,
  updateMyProfile,
  getAllUsers,
  getUserById,
  checkToken,
};
