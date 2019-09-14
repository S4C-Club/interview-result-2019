import React, { useEffect, useState, Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class List extends Component {
  render() {
    const { data, searchValue, searched } = this.props;
    const lowercasedFilter = searchValue.toLowerCase();
    let filteredData = [];
    if (data.length > 0) {
      filteredData = data.filter(item => {
        return Object.keys(item).some(key => {
          if (key === "name" || key === "email" || key === "number")
            return item[key].toLowerCase().includes(lowercasedFilter);
        });
      });
    }

    return (
      <div>
        {filteredData.length > 0
          ? filteredData.map(item => (
              <Link
                to={{
                  pathname: `/result`,
                  state: { candidate: item }
                }}
              >
                <div className="list-item" key={item.id}>
                  {item.name} {item.email === "null" ? "" : item.email} -{" "}
                  {item.number}
                </div>
              </Link>
            ))
          : ""}
      </div>
    );
  }
}
