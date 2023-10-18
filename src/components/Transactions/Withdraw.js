import "./Withdraw.css";
import React, { useState } from "react";
import logo from "../../pics/sub.png";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getMyProfile } from "../api/auth";
import { withdrawME } from "../api/transactions";
import { useNavigate } from "react-router-dom";
const Withdraw = () => {
  const navigate = useNavigate();
  const { data: myData, isLoading } = useQuery({
    queryKey: ["getMyProfile"],
    queryFn: () => getMyProfile(),
  });
  const [widthdraw, setWithdraw] = useState(myData.balance);
  const { mutate } = useMutation({
    mutationKey: ["WithdrawAmounr"],
    mutationFn: () => withdrawME(widthdraw),
    onSuccess: () => {
      navigate("/profile");
    },
  });
  if (isLoading) {
    return (
      <h1 style={{ color: "silver" }}>
        Fetching your balance information please wait...
      </h1>
    );
  }

  const withBalanceHandler = (e) => {
    setWithdraw(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit} className="depo_style">
        <div className="with_rest">
          <img src={logo} />
          <div className="with_label">
            <label>Make a withdraw</label>
          </div>
          <div className="with_balance">
            <h4>current balance:</h4>
            <h4>${myData.balance}</h4>
            <input
              onChange={withBalanceHandler}
              name="amount"
              required
              placeholder="How much you want to withdraw"
              type="number"
            />
          </div>
          <div className="with_button">
            <button onClick={mutate} type="submit">
              Withdraw
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Withdraw;
