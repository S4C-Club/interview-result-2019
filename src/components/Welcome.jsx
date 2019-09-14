import React, { useEffect, useState, Component } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
class Welcome extends React.Component {
  render() {
    return (
      <React.Fragment>
        <legend>Bạn đã sẵn sàng tới với kết quả đợt 2?</legend>
        <NavLink to="/search" activeClassName="active" className="register-button">
          Tới luôn
        </NavLink>
      </React.Fragment>
    );
  }
}

export default Welcome;
