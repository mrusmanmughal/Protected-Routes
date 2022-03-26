import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";

const Client = () => {
  async function login() {
    let items = { email: "test2@gmail.com", password: "password" };
    let result = await fetch("https://site-findert.herokuapp.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(items),
    });
    result = await result.json();
    console.log(result.payload.status);
    localStorage.setItem("user", JSON.stringify(result));
  }

  return (
    <div>
      <Navbar />
      <h1>WELCOME TO USER SIDE</h1>
    </div>
  );
};

export default Client;
