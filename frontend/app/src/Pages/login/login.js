import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import img1 from "./img1.png";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    axios.post("api/goals/login", user)
    .then((res) => {
      // console.log(res.data, "thi")
      alert(res.data.message);
      props.setLoginUser(res.data.user);
      console.log(res.data.user, "th")
      navigate(`/viewP`, { state: { user: res.data } });
    })
    .catch(error => console.error("Login Error: ",error ))
  }

  return (
    <div className="login" style={{alignItems:"start"}}>
      <img style={{ maxWidth: "100%" }} src={img1} alt="thrift" />
      <h1 className="h" style={{ marginBottom: "-0.5px", }}>
        Enter your Email{" "}
      </h1>

      <input
        type="text"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Enter your Email"
      ></input>
      <h1 className="h"
        style={{
        //   fontSize: "110%",
          marginBottom: "-0.5px",
        //   marginLeft: "-70%",
        }}
      >
        Enter Password{" "}
      </h1>

      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        placeholder="Enter your Password"
      ></input>
      <button className="button" onClick={login}>
        Log in
      </button>
      <div>or</div>
      <button className="button" onClick={() => navigate("/register")}>
        Register
      </button>
    </div>
  );
};

export default Login;
