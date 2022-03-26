import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import Client from "./Components/client/Client";
import Dashboard from "./Components/dashboard/Dashboard";
import Login from "./Components/Login/Login";
const Ways = () => {
  const [User, setUser] = useState();
  const out = () => {
    localStorage.clear();
    setUser(false);
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/client" element={<Client />} />
        //if user is not true
        {!User && (
          <Route
            path="/login"
            element={<Login userTrue={() => setUser(true)} />}
          />
        )}
        //if user is true
        {User && (
          <>
            <Route
              path="/dashboard"
              element={<Dashboard list={User} logOut={out} />}
            />
          </>
        )}
        //fallback Route
        <Route
          path="*"
          element={<Navigate to={User ? "/dashboard" : "/login"} />}
        />
      </Routes>
    </>
  );
};

export default Ways;
