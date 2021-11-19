import React from "react";
import { Form, Button } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="pt-5 pb-2 footer text-light">
      <div className="container">
        <div className="row ">
          <div className="col-lg-4 text-start">
            <h3> Sales Hour</h3>
            <hr />

            <h4> Mon to Sat</h4>
            <br />
            <p>10.00 am to 9.00 pm </p>
            <p>
              <b>Sunday Off</b>
            </p>
          </div>
          <div className="col-lg-4 text-start">
            <h3>Address</h3>

            <hr />
            <p>
              New College Buildding , Kandir Par , South Sadar , Cumilla - 3500
            </p>
            <br />
            <h3>Email </h3>
            <hr />
            <p>CarZone@info.com</p>
          </div>
          <div className="col-lg-4 text-start">
            <h3>Newsletter</h3>
            <hr />
            <p>We do not Spam you !! </p>
            <br />
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
            </Form>
            <Button variant="outline-light">submit</Button>{" "}
          </div>
        </div>
        <hr />
        <small> All Right Reserved By IKRAM AKBAR || 2021-22</small>
      </div>
    </div>
  );
};

export default Footer;
