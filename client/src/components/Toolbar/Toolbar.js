import React from 'react';
import './Toolbar.css';
import Navbar from '../../components/layout/Navbar';
import Footbar from '../../components/Footbar/Footbar';
import Sidebar from "react-sidebar";
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';
import { FaChartPie, FaChartBar, FaUser } from 'react-icons/fa';
import { MdContactMail } from "react-icons/md";
import { AiTwotoneSetting } from "react-icons/ai";
import { IoMdAnalytics } from "react-icons/io";
import ZIndex from 'react-z-index';

class Toolbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
    // document.getElementsByClassName('tool-bar')[0].style.zIndex = 1;
  }


  render() {
    return (
      <div className="tool-bar">
        <Container>
          <div id="sticky-sidebar">
            <Sidebar
              sidebar={
                <div className="bg-dark" id="side-bar">
                  <br></br>
                  <div id="dash-link">
                    <NavLink to="/dashboard"> <strong>Dashboard</strong></NavLink>
                  </div>
                  <br></br>
                  <div>
                    <NavLink to="/General"><FaChartBar /> General Performance</NavLink>
                  </div>
                  <div>
                    <NavLink to="/Optimizer"><FaChartPie /> Optimizer Performance</NavLink>
                  </div>
                  <div>
                    <NavLink to="/UserAdmin"><FaUser /> User Administration</NavLink>
                  </div>
                  <div>
                    <NavLink to="/CreateUser"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Create User</NavLink>
                  </div>
                  <div>
                    <NavLink to="/CreateProfile">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Create Profile</NavLink>
                  </div>
                  <div>
                    <NavLink to="/Contact">< MdContactMail /> Contact Us</NavLink>
                  </div>
                  <div>
                    <NavLink to="/Settings"><AiTwotoneSetting /> Settings</NavLink>
                  </div>
                  <div>
                    <NavLink to="/Analytics">< IoMdAnalytics /> Analytics</NavLink>
                  </div>
                </div>}
              open={this.state.sidebarOpen}
              onSetOpen={this.onSetSidebarOpen}
              styles={{ sidebar: { marginTop: "0px", width: "260px", bottom: "0" } }}
            >
              <button onClick={() => this.onSetSidebarOpen(true)}
                style={{
                  marginTop: "10px",
                  marginLeft: "10px",
                  border: "none",
                  backgroundColor: 'transparent',
                  zIndex: "3"
                }}>
                <svg viewBox="0 0 100 80" width="40" height="40">
                  <rect width="100" height="15"></rect>
                  <rect y="30" width="100" height="15"></rect>
                  <rect y="60" width="100" height="15"></rect>
                </svg>
              </button>
            </Sidebar>
          </div>
        </Container>
      </div>
    );
  }
}

export default Toolbar;