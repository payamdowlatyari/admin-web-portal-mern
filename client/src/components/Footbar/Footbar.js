import React from "react";
import './Footbar.css';

const Footbar = () => {
  return (

    <div className="footer-copyright text-center py-3">
      <nav className="navbar fixed-bottom navbar-dark bg-dark text-center">

        <small>
          CalPlug &copy; {new Date().getFullYear()} | All Rights Reserved
        </small>

      </nav>

    </div>

  );
}

export default Footbar;