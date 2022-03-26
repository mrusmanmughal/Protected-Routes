import React, { useState } from "react";
import axios from "axios";
import "../../Style/login.css";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";

const Login = ({ userTrue }) => {
  let navigate = useNavigate();
  const [Credentials, setCredentials] = useState({ email: "", password: "" });
  const { email, password } = Credentials;

  const handleChange = (e) => {
    setCredentials({ ...Credentials, [e.target.name]: e.target.value });
  };
  const submit = async (e) => {
    e.preventDefault();
    // axios
    //   .post("https://site-findert.herokuapp.com/auth/login", { Credentials })
    //   .then(
    //     (response) => {
    //       console.log(response);
    //       userTrue();

    //       navigate("/dashboard");
    //     },
    //     (error) => {
    //       let p = document.querySelector("p");
    //       p.textContent = "Invalid Credentials";
    //       console.log(error);
    //     }
    //   );

    let items = Credentials;
    let result = await fetch("https://site-findert.herokuapp.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(items),
    });
    result = await result.json();
    console.log(result);
    localStorage.setItem("user", JSON.stringify(result));

    if (result.payload.status === "Admin") {
      userTrue();
      navigate("/dashboard");
    } else {
      navigate("/client");
    }
  };

  return (
    <>
      <Navbar hide={true} />
      <div className="login">
        <form action="" onSubmit={(e) => submit(e)}>
          <input
            type="text"
            placeholder="email"
            name="email"
            value={email}
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => handleChange(e)}
          />
          <div className="btn">
            <p></p>
            <button className="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
