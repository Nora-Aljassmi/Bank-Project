import React, { useState } from "react";
import logo from "../../pics/sub.png";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getMyProfile } from "../api/auth";
import "./Deposit.css";
import { DepositMe } from "../api/transactions";
import { Navigate, useNavigate } from "react-router-dom";

const Deposit = () => {
  const navigate = useNavigate();
  const { data: myData, isLoading } = useQuery({
    queryKey: ["getMyProfile"],
    queryFn: () => getMyProfile(),
  });
  const [newBalance, setNewBalance] = useState(myData.balance);
  const { mutate } = useMutation({
    mutationKey: ["updateAmount"],
    mutationFn: () => {
      DepositMe(newBalance);
    },
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

  const addBalanceHandler = (e) => {
    setNewBalance(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit} className="depo_style">
        <div className="depo_rest">
          <img src={logo} />
          <div className="depo_label">
            <label>Make a deposit</label>
          </div>
          <div className="depo_balance">
            <h4>current balance:</h4>
            <h4>${myData.balance}</h4>
            <input
              onChange={addBalanceHandler}
              name="amount"
              required
              placeholder="Enter the amount"
              type="number"
            />
          </div>
          <div className="depo_button">
            <button onClick={mutate} type="submit">
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Deposit;
