import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
const Login = () => {
  const [emailId, setEmailId] = useState("user1@gmail.com");
  const [password, setPassword] = useState("User1@pass123");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailId,
          password,
        },
        {
          withCredentials: true,
        }
      );
      // console.log(res);
      dispatch(addUser(res.data));
      navigate("/");
    } catch (err) {
      // console.error(err);
      setError(err?.response?.data || "Something went wrong");
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
          <p className="text-red-500">{error}</p>
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
