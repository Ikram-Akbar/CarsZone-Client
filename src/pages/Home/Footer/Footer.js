import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
      <div className="pt-5 pb-2 footer text-light">
        <div className="container">
          <div className="row ">
            <div className="col-lg-3">
              <h5 className="text-start">ABOUT FASTZone</h5>
              <p className="text-start">
                It is a long established fact that a reader will be distracted
                by the readable.
              </p>
              <div className="d-flex justify-content-between">
                <i className="fab fa-facebook me-4 fs-4"></i>
                <i className="fab fa-instagram me-4 fs-4"></i>
                <i className="fab fa-linkedin-in me-4 fs-4"></i>
                <i className="fab fa-twitter me-2 fs-4"></i>
              </div>
            </div>
            <div className="col-lg-3 text-start">
              <h5>TOP BRAND</h5>
              <p><i className="fas fa-chevron-right"></i> Alfa Romeo</p>
              <p><i className="fas fa-chevron-right"></i> lotus Evora</p>
              <p><i className="fas fa-chevron-right"></i> Ferrari</p>
              <p><i className="fas fa-chevron-right"></i> BMW Series</p>
              <p><i className="fas fa-chevron-right"></i> Mercedes</p>
            </div>
            <div className="col-lg-3 text-start">
              <h5>CATEGORIES</h5>
              <p><i className="fas fa-chevron-right"></i> Crossovers</p>
              <p><i className="fas fa-chevron-right"></i> Hybrid SUVs</p>
              <p><i className="fas fa-chevron-right"></i> Sports Cars</p>
              <p><i className="fas fa-chevron-right"></i> Sports Cars</p>
              <p><i className="fas fa-chevron-right"></i> Hybrid Cars</p>
            </div>
            <div className="col-lg-3 text-start">
              <h5>Subscribe</h5>
              <p>
                <input className="w-100" type="text" placeholder="Email" />
              </p>
              <button className="outline-secondary w-100">Subscribe</button>
              <p className="mt-4">
                Get The Latest Updates via email. Any time you may unsubscribe
              </p>
            </div>
          </div>
          <div>
            <hr className="text-secondary" />
            <div className="d-flex justify-content-between">
              <p className="fw-bolder">© Website 2021 | All Rights Reserved</p>
              <div>
                <small className="ms-2">Privacy</small>
                <small className="ms-2">Terms</small>
                <small className="ms-2">Sitemap</small>
                <small className="ms-2">Help</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Footer;