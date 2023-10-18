import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getMyTransactions } from "../api/transactions";
import "./MyTransactions.css";
const MyTransactions = () => {
  const { data: transactions, isLoading } = useQuery({
    queryKey: ["transactions"],
    queryFn: () => getMyTransactions(),
  });

  console.log(transactions);
  if (isLoading) {
    return (
      <h1 style={{ color: "silver" }}>
        Fetching my transactions information is in progress...
      </h1>
    );
  }
  const transactionsInfo = transactions.map((transaction) => {
    return (
      <div>
        <div className="transactions_card">
          <h1>Type:{transaction.type}</h1>

          <h2>Amount: {transaction.amount}</h2>
          <h3>from: {transaction.from}</h3>
          <h3>to: {transaction.to}</h3>
        </div>
      </div>
    );
  });

  return <div className="transactions_History_style">{transactionsInfo}</div>;
};
export default MyTransactions;
