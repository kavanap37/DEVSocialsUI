import React, { useState } from "react";
import axios from "axios";
const Login = () => {
  const [emailId, setEmailId] = useState("user1@gmail.com");
  const [password, setPassword] = useState("User1@pass123");
  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3000/login",
        {
          emailId,
          password,
        },
        {
          withCredentials: true,
        }
      );
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="flex justify-center my-5">
      <div className=" card bg-base-300 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title">Login</h2>
          <input
            type="text"
            placeholder="Email ID"
            className="input"
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
