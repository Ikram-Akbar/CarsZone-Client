import { Alert, Button } from "@mui/material";
import React, { useState } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();

  const history = useHistory();
  const location = useLocation();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    console.log(loginData.email, loginData.password);
    e.preventDefault();
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };

  return (
    <div className="container  my-5">
      <form
        onSubmit={handleLoginSubmit}
        className="w-50 mx-auto bg-dark shadow py-5 px-3"
      >
        <div className="mb-3">
          <h2 className="text-white">Please Login</h2>
          <input
            className="form-control"
            onChange={handleOnChange}
            type="email"
            name="email"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            onChange={handleOnChange}
            type="password"
            name="password"
            placeholder="Your Password"
          />
        </div>
        <button type="submit" className="btn btn-outline-light w-100 ">
          LOGIN
        </button>
        <NavLink
          style={{ textDecoration: "none", color: "white" }}
          to="/register"
        >
          New User? Please Register
        </NavLink>
        <br />
        {isLoading && (
          <div className="spinner-border text-success" role="status">
            <span className="visually-hidden">Wait a Moment ...</span>
          </div>
        )}
        {user?.email && <Alert severity="success"> You Have Login Successfully</Alert>}
        {authError && (
          <div className="alert alert-danger" role="alert">
            {authError}
          </div>
        )}
        <p className="text-white fs-3 ">-----------------------------</p>
        <Button onClick={handleGoogleSignIn} variant="contained">
          Google Sign In
        </Button>
      </form>
    </div>
  );
};

export default Login;
