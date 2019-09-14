import React, { useEffect, useState, Component } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import List from "./List";
import loading from "../assets/loading.svg";

class Result extends React.Component {
  state = {
    searchValue: "",
    searched: false,
    isLoading: false
  };
  handleChange = event => {
    this.setState({ searchValue: event.target.value, searched: false });
  };

  onSubmit = e => {
    this.setState({ searched: true, isLoading: true });
    setTimeout(() => this.setState({ isLoading: false }), 3000);
    e.preventDefault();
  };

  toggleSearch = payload => {
    this.setState({ isLoading: payload });
  };
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.onSubmit}>
          <fieldset>
            <legend>𝐅𝐨𝐥𝐥𝐨𝐰 𝐭𝐡𝐞 𝐑𝐄𝐃, 𝐃𝐨 𝐲𝐨𝐮𝐫 𝐁𝐞𝐬𝐭!</legend>
            <div className="inner-form">
              <div className="input-field">
                <div className="choices">
                  <div className="choices__inner">
                    <input
                      value={this.searchValue}
                      onChange={this.handleChange}
                      className="form-control choices__input"
                      id="choices-text-preset-values"
                      type="text"
                      placeholder="Nhập tên, số điện thoại hoặc email.."
                    />
                  </div>
                </div>

                <button className="btn-search" type="submit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </fieldset>
        </form>
        {this.state.searched &&
        this.state.searchValue.length > 0 &&
        this.props.data &&
        !this.state.isLoading ? (
          <List
            data={this.props.data}
            searchValue={this.state.searchValue}
          ></List>
        ) : this.state.isLoading ? (
          <img src={loading}></img>
        ) : (
          ""
        )}
      </React.Fragment>
    );
  }
}

export default Result;
