import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "10%", float: "right", marginTop: "-25px" }}>
        <div className="row ">
          <div className="col">
            <Link
              to="/register"
              style={{
                width: "100px",
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
                width: "100px",
                margin: "5px",
                float: "right"
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
