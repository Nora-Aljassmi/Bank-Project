import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import LogIn from "./pages/LogIn/LogIn";
import Register from "./pages/Register/Register";
import NavBar from "./components/NavBar";
import MyProfile from "./components/MyProfile/MyProfile";
import ProfileUpdate from "./components/MyProfile/ProfileUpdate";
import UsersList from "./pages/Users/UsersList";
import UsersInfo from "./pages/Users/UsersInfo";
import { useEffect, useState } from "react";
import userContext from "./context/UserContext";
import { checkToken } from "./components/api/auth";
import Deposit from "./components/Transactions/Deposit";
import Withdraw from "./components/Transactions/Withdraw";
import Transfer from "./components/Transactions/Transfer";
import MyTransactions from "./components/Transactions/MyTransactions";

function App() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    const isLoged = checkToken();
    setUser(isLoged);
  }, []);

  return (
    <userContext.Provider value={{ user, setUser }}>
      <div className="App">
        <NavBar />
        <h2 style={{ color: "silver" }}>{`${user}`}</h2>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/profile" Component={MyProfile} />
          <Route path="/logIn" Component={LogIn} />
          <Route path="/register" Component={Register} />
          <Route path="/profileUpdate" Component={ProfileUpdate} />
          <Route path="/users" Component={UsersList} />
          <Route path="/usersInfo/:userId" Component={UsersInfo} />
          <Route path="/deposit" Component={Deposit} />
          <Route path="/withdraw" Component={Withdraw} />
          <Route path="/transfer" Component={Transfer} />
          <Route path="/transactions" Component={MyTransactions} />
        </Routes>
      </div>
    </userContext.Provider>
  );
}

export default App;
