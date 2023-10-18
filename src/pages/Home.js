import React from "react";
import main from "../pics/main.png";

const Home = () => {
  return (
    <div>
      <img
        style={{
          width: "550px",
          boxShadow: "1px 1px 20px 10px silver",

          margin: "90px",
        }}
        src={main}
      />
      <h2 style={{ color: "white", fontFamily: "monospace" }}>
        My Bank is a cutting-edge mobile banking application designed to provide
        a seamless and secure financial experience for its users. This app
        empowers customers to take full control of their finances, offering a
        range of features and services to meet their banking needs. Here are
        some key highlights:
      </h2>
    </div>
  );
};

export default Home;
