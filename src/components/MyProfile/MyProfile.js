import React from "react";
import "./MyProfile.css";
import image from "../../pics/user3.png";

import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getMyProfile } from "../api/auth";
import { BASE_URL } from "../api";

const MyProfile = () => {
  const navigate = useNavigate();

  const { data: myData, isLoading } = useQuery({
    queryKey: ["getMyProfile"],
    queryFn: () => getMyProfile(),
  });

  if (isLoading) {
    return (
      <h1 style={{ color: "silver" }}>
        Fetching private data for your profile...
      </h1>
    );
  }

  console.log(myData);

  return (
    <div className="profile_style">
      <div className="profile_style_card">
        <h1>My Profile</h1>
        {<img src={BASE_URL + `/${myData.image}`} />}
        {<h2>userName: {myData.username}</h2>}
        <h2>balance: {myData.balance}</h2>
        <button onClick={() => navigate("/profileUpdate")}>
          Update profile
        </button>
        <div>
          <button
            style={{ margin: "10px" }}
            onClick={() => navigate("/deposit")}
          >
            make a deposit
          </button>
          <button
            style={{ margin: "10px" }}
            onClick={() => navigate("/withdraw")}
          >
            Withdraw money
          </button>
          <button
            style={{ margin: "10px" }}
            onClick={() => navigate("/transfer")}
          >
            Transfer money
          </button>
          <div>
            <button
              style={{ margin: "10px", width: "150px" }}
              onClick={() => navigate("/transactions")}
            >
              Transactions History
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
