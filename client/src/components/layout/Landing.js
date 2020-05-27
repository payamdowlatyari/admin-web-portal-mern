import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Landing.css';

class Landing extends Component {
  render() {
    return (
      <div className="container" style={{ width: "100%" }}>
        <div className="row">
          <div className="col text-center" style={{ marginTop: "20%" }}>
            <div style={{ width: "30%", margin: "0 auto", marginBottom: "10px", minWidth: "200px" }}>
              <h3>Who We Are</h3>
              <div>
                The Administrative Web Portal that will provide varying controls over the entire population of Smart EVSE through the Admin Interface,
                alongside individual customer EVSE support through the Management Console.

                <div className="social-link">
                  <button className="fa fa-envelope"></button>
                  <button className="fa fa-phone"></button>
                  <button className="fa fa-twitter"></button>
                  <button className="fa fa-facebook"></button>
                  <button className="fa fa-linkedin"></button>
                  <button className="fa fa-github"></button>
                  <button className="fa fa-google"></button>
                  <button className="fa fa-youtube"></button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Link
              to="/register"
              style={{
                width: "120px",
                margin: "5px",
                float: "right"
              }}
              className="btn btn-outline-primary"
            >
              Register
              </Link>
          </div>

          <div className="col">
            <Link
              to="/login"
              style={{
                width: "120px",
                margin: "5px",
                float: "left"
              }}
              className="btn btn-outline-secondary"
            >
              Log In
              </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
