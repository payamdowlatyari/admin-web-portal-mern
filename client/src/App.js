import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import Home from './components/Home';
import Optimizer from './components/Optimizer';
import UserAdmin from './components/UserAdmin';
import General from './components/General';
import Container from "react-bootstrap/Container";
import Toolbar from './components/Toolbar/Toolbar';
import Settings from './components/Settings';
import Contact from './components/Contact';
import Analytics from './components/Analytics';
import CreateUser from './components/Data/CreateUser';
import CreateProfile from './components/Data/CreateProfile';
import EditProfile from './components/Data/EditProfile';
import CreateAdmin from './components/Data/CreateAdmin';
import EditAdmin from './components/Data/EditAdmin';

import Navbar from "./components/layout/Navbar";
import './App.css';
import Footbar from "./components/Footbar/Footbar";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends Component {
  render() {
    return (
      <Container fluid >

        <Provider store={store}>
          <Router>

            <div className="App">
              <Navbar />
              <Toolbar />
              <div className="content">
                <Route exact path="/" component={Landing} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Switch>
                  <PrivateRoute exact path="/dashboard" component={Dashboard} />
                  <PrivateRoute exact path='/Home' component={Home} />
                  <PrivateRoute exact path='/General' component={General} />
                  <PrivateRoute exact path='/Optimizer/' component={Optimizer} />
                  <PrivateRoute exact path='/UserAdmin/' component={UserAdmin} />
                  <PrivateRoute exact path='/Settings/' component={Settings} />
                  <PrivateRoute exact path='/Contact/' component={Contact} />
                  <PrivateRoute exact path='/Analytics/' component={Analytics} />
                  <PrivateRoute exact path="/EditProfile/:id" component={EditProfile} />
                  <PrivateRoute exact path="/CreateProfile" component={CreateProfile} />
                  <PrivateRoute exact path="/CreateUser" component={CreateUser} />
                  <PrivateRoute exact path="/CreateAdmin" component={CreateAdmin} />
                  <PrivateRoute exact path="/EditAdmin/:id" component={EditAdmin} />


                </Switch>
              </div>
              <Footbar />

            </div>

          </Router>
        </Provider>

      </Container>
    );
  }
}
export default App;
