import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Home from '../Home';
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { user } = this.props.auth;

    return (
      <div >
        <div style={{ position: 'relative', float: "right", marginTop: '-150px' }}>
          <b>Hello,</b> {user.name.split(" ")[0]}
        </div>
        <div style={{ position: 'relative', float: "right", marginTop: '-120px' }}>
          <Link
            style={{
              width: "100px"
            }}
            onClick={this.onLogoutClick}
            className="btn btn-outline-secondary"
          >
            Logout
            </Link>
        </div>
        <Container>
          <Home />
        </Container>

      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
