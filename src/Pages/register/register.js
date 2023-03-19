import React, { useState } from "react";
import "./register.css";
import axios from "axios";
// import img from "./img.png";
import img1 from "./img1.png";


import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const validate = () => {
    const errors = {};

    if (!user.name || user.name.trim().length < 4) {
      errors.name = "Name should be at least 4 characters long";
    }

    if (!user.email || !user.email.endsWith("@lums.edu.pk")) {
      errors.email = "Invalid email, please enter a valid LUMS email";
    }

    if (
      !user.password ||
      !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/.test(user.password) ||
      user.password.trim().length < 8
    ) {
      // errors.password = 
      //   "Password should be at least 8 characters long with at least one uppercase letter, one lowercase letter, one number and one special character";
      errors.password = ["Password should be at least 8 characters long with",
                          "at least one uppercase letter, one lowercase letter,",
                          "one number and one special character."]
    }

    if (user.password !== user.reEnterPassword) {
      errors.reEnterPassword = "Passwords do not match";
    }

    return errors;
  };

  const register = () => {
    const errors = validate();

    if (Object.keys(errors).length) {
      setErrors(errors);
      return;
    }

    axios
      .post("/api/goals/register", user)
      .then((res) => {
        alert(res.data.message);
        navigate("/login");
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  return (
    <div className="main">
      <div className="in">
        <span className="reg">
          <div className="r">
            <span className="register">
              {console.log("User", user)}
              <img style = {{maxWidth : "100%"}} src={img1} alt="thrift" />

              {/* <h1
                style={{
                  color: "#013221",
                  font: "Poppins",
                  fontSize: "100%",
                }}
              >
                Welcome to Thrift. Lums
              </h1> */}
                            <h1 style={{ fontSize:"110%",marginBottom:"-0.5px"}}>Full Name </h1>

              <input
                type="text"
                name="name"
                value={user.name}
                placeholder="Name"
                required="true"
                pattern="^[A-Za-z0-9]{4,}$"
                onChange={handleChange}
              />
              {errors.name && (
                <span className="error">{errors.name}</span>
              )}
               <h1 style={{ fontSize:"110%",marginBottom:"-0.5px"}}>Enter Email </h1>

              <input
                type="email"
                name="email"
                value={user.email}
                placeholder="Email"
                onChange={handleChange}
              />
              {errors.email && (
                <span className="error">{errors.email}</span>
              )}
             <h1 style={{ fontSize:"110%",marginBottom:"-0.5px"}}>Enter Password </h1>

              <input
                type="password"
                name="password"
                value={user.password}
                placeholder="Password"
                onChange={handleChange}
              />
              {errors.password && (
                <span className="error">{errors.password[0]}<br/>{errors.password[1]}<br/>{errors.password[2]}</span>
              )}
              <h1 style={{ fontSize:"110%", marginBottom:"-0.5px"}}>Confirm Password </h1>

              <input
                type="password"
                name="reEnterPassword"
                value={user.reEnterPassword}
                placeholder="Re-enter"
                onChange={handleChange}
              />
              {errors.reEnterPassword && (
                <span className="error">{errors.reEnterPassword}</span>
                )}
                <button style={{maxWidth:"70%", alignSelf:"center"}} onClick={register}>Register</button>
                <p style={{ color: "black", font: "Poppins", fontSize: "85%" }}>
                Already have an account?{" "}
                <a href="/login" style={{ color: "blue" }}>
                Login here
                </a>
                </p>
                </span>
                </div>
                </span>
                
                </div>
                </div>
                );
                };
 export default Register;
