import React, { Component } from "react";

import { Link } from "react-router-dom";

export default class List extends Component {
  render() {
    const { data, searchValue } = this.props;
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
        {filteredData.length > 0 && searchValue.length >= 3  ? (
          filteredData.map(item => (
            <Link
              to={{
                pathname: `/result`,
                state: { candidate: item }
              }}
            >
              <div className="list-item" key={item.id}>
                {item.name} {item.email === "null" ? "" : "- " + item.email}{" "}
                {item.number === "null" ? "" : "- " + item.number}
              </div>
            </Link>
          ))
        ) : (
          <div className="list-item">
            Hmmm... Không tìm thấy kết quả nào :( Vui lòng tìm kiếm lại
          </div>
        )}
      </div>
    );
  }
}
