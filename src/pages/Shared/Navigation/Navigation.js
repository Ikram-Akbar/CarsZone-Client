import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Navigation = () => {
    const {user, logout} = useAuth();

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <span className="text-info fw-bolder">CarsZone</span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse m-2 " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li>
                <Link
                  to="/home"
                  className="nav-item nav-link active text-light"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link to="/explore" className="nav-item nav-link text-light">
                  Explore
                </Link>
              </li>
              {user?.email && (
                <li>
                  <Link
                    to="/dashboard"
                    className="nav-item nav-link text-light"
                  >
                    Dashboard
                  </Link>
                </li>
              )}
            </ul>
            <div className="d-flex">
              {user?.email && (
                <span className="my-auto me-2 text-light">
                  {user.displayName}
                </span>
              )}
              {user?.email ? (
                <Link to="/home">
                  <button
                    onClick={logout}
                    className="btn btn-outline-light"
                    type="submit"
                  >
                    Log Out
                  </button>
                </Link>
              ) : (
                <Link to="/login">
                  <button className="btn btn-outline-info" type="submit">
                    Login
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    );
};

export default Navigation;