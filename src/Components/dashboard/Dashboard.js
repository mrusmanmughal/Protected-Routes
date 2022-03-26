import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";

const Dashboard = ({ logOut, list }) => {
  // const [User, setUser] = useState();
  // useEffect(() => {
  //   localStorage.setItem("user", true);
  // }, [User]);
  // useEffect(() => {
  //   const u = localStorage.getItem("user");
  //   console.log(u);
  //   // u && JSON.parse(u) ? setUser(true) : setUser(false);
  // }, []);

  return (
    <>
      <Navbar data={list} logout={logOut} />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>WElcome to dashboard </h1>
      </div>
    </>
  );
};

export default Dashboard;
