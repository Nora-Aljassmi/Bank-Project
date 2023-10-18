import React from "react";
import "./Users.css";
import image from "../../pics/user3.png";
import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../../components/api/auth";
import { NavLink } from "react-router-dom";
const UsersList = () => {
  const { data: userData, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: () => getAllUsers(),
  });
  console.log(userData);
  if (isLoading) {
    return (
      <h1 style={{ color: "silver" }}>
        Fetching users information is in progress...
      </h1>
    );
  }
  const userList = userData.map((user) => {
    return (
      <NavLink
        style={{ textDecoration: "none", listStyle: "none" }}
        to={`/usersInfo/${user._id}`}
      >
        <div>
          <div className="user_profile_style_card">
            <h1>User Profile</h1>
            <img src={user.image} />
            <h2>userName: {user.username}</h2>
            <h2>User balance: {user.balance}</h2>
          </div>
        </div>
      </NavLink>
    );
  });

  return <div className="user_profile_style">{userList}</div>;
};

export default UsersList;
