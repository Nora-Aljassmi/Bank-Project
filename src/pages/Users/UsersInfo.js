import { useQuery } from "@tanstack/react-query";
import React from "react";
import "./UserInfo.css";
import { useParams } from "react-router-dom";
import { getUserById } from "../../components/api/auth";

const UsersInfo = () => {
  const { userId } = useParams();

  const { data: user, isLoading } = useQuery({
    queryKey: ["user", userId],
    queryFn: () => getUserById(userId),
  });
  console.log(user);
  if (isLoading) {
    return <h1 style={{ color: "silver" }}>Loading...</h1>;
  }
  return (
    <div className="user_info_profile_style_main">
      <div className="user_info_profile_style_card">
        <h1>User Profile</h1>
        <img src={user.image} />
        <h2>userName: {user.username}</h2>
        <h2>User balance: {user.balance}</h2>
      </div>
    </div>
  );
};

export default UsersInfo;
