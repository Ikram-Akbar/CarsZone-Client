import React, { useState } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const { registerUser, isLoading, user, authError } = useAuth();
  const history = useHistory();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleRegisterSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Your password didn't match");
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
  };

  return (
    <div className="container">
      <form
        onSubmit={handleRegisterSubmit}
        className="w-50 mx-auto bg-dark shadow p-5 my-4"
      >
        <div className="mb-3">
          <h2 className="text-white"> Please Register</h2>
          <input
            className="form-control"
            onBlur={handleOnBlur}
            type="text"
            name="name"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            onBlur={handleOnBlur}
            type="email"
            name="email"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            onBlur={handleOnBlur}
            type="password"
            name="password"
            placeholder="Your Password"
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            onBlur={handleOnBlur}
            type="password"
            name="password2"
            placeholder="Retype Your Password"
          />
        </div>
        <button type="submit" className="btn btn-outline-light w-100">
          REGISTER
        </button>
        <NavLink style={{ textDecoration: "none", color: "white" }} to="/login">
          Already Registered? Please Login
        </NavLink>
        {isLoading && (
          <div className="spinner-border text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
        {authError && (
          <div className="alert alert-danger" role="alert">
            {authError}
          </div>
        )}
      </form>
    </div>
  );
};

export default Register;
