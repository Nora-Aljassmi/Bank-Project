import "./Transfer.css";
import logo from "../../pics/sub.png";
import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { tranferToUser } from "../api/transactions";
import { Navigate, useNavigate } from "react-router-dom";

const Transfer = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [amount, setAmount] = useState(null);
  const { mutate } = useMutation({
    mutationKey: ["transfer"],
    mutationFn: () => tranferToUser(userName, amount),
    onSuccess: () => {
      navigate("/profile");
    },
  });
  const userNameHandler = (e) => {
    setUserName(e.target.value);
  };

  const amountHandler = (e) => {
    setAmount(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit} className="transfer_style">
        <div className="transfer_rest">
          <img src={logo} />
          <div className="transfer_label">
            <label>Make a withdraw</label>
          </div>
          <div className="transfer_balance">
            <h4>TRansfer to:</h4>
            <input
              onChange={userNameHandler}
              name="username"
              required
              placeholder="Plese enter the useName"
              type="textr"
            />
          </div>
          <div className="transfer_user_balance">
            <h4>My current balance:</h4>
            <h4>$</h4>
            <input
              onChange={amountHandler}
              name="amount"
              required
              placeholder="How much you want to withdraw"
              type="number"
            />
          </div>
          <div className="transfer_button">
            <button onClick={mutate} type="submit">
              Transfer
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Transfer;
