import React from "react";
import "./CallToAction.css";

const CallToAction = () => {
  return (
    <div className="Action-banner">
      <div className="row container h-100">
        <div className="col-lg-5 d-flex justify-content-center align-items-center">
          <div>
            <h2>ZOOM AWAY IN</h2>
            <h4>THE NEW 2021 EDITION</h4>
            <div className="bg-info p-2 my-3">
              <span className="fs-3 me-2">DOWNLOAD BROCHURE</span>
              <i className="far fa-file fs-3"></i>
            </div>
            <div className="bg-info p-2">
              <span className="fs-3 me-2">DOWNLOAD PRICE LIST</span>
              <i className="far fa-list-alt fs-3"></i>
            </div>
          </div>
        </div>
        <div className="col-lg-7"></div>
      </div>
    </div>
  );
};

export default CallToAction;
