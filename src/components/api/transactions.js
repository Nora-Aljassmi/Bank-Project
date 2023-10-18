import { instance } from ".";

const DepositMe = async (amount) => {
  const response = await instance.put(
    "/mini-project/api/transactions/deposit",
    {
      amount,
    }
  );
  return response.data;
};
const withdrawME = async (amount) => {
  const response = await instance.put(
    "/mini-project/api/transactions/withdraw",
    {
      amount,
    }
  );
  return response.data;
};
const tranferToUser = async (username, amount) => {
  const response = await instance.put(
    `/mini-project/api/transactions/transfer/${username}`,
    {
      amount,
    }
  );
  return response.data;
};
const getMyTransactions = async () => {
  const response = await instance.get("/mini-project/api/transactions/my");

  return response.data;
};

export { DepositMe, withdrawME, tranferToUser, getMyTransactions };
