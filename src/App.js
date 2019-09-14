import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import List from "./components/List";
import { Route, Link, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Result from "./components/Result";
import Home from "./components/Home";
import Welcome from "./components/Welcome";
import logo from "./assets/logo.png";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const sheetAPI =
      "https://spreadsheets.google.com/feeds/cells/1gyA4Frb9oZVNVc2ZKMCA7Cf-ybHVSicwe8Z8LHTOoCo/od6/public/values?alt=json";
    axios.get(sheetAPI).then(res => {
      let entry = res.data.feed.entry;

      const resData = [];

      for (let i = 5; i <= entry.length - 5; i += 5) {
        const isPassed = entry[i + 4].content.$t === "ĐẬU";
        resData.push({
          id: entry[i].content.$t,
          name: entry[i + 1].content.$t,
          email: entry[i + 2].content.$t,
          number: `0${entry[i + 3].content.$t}`,
          result: isPassed
        });
      }
      setData(resData);
    });
  }, []);

  return (
    <div className="App">
      <div className="s004">
        <div>
          <Link to="/" className="logo-link">
            <img src={logo} alt="logo" className="logo" />
          </Link>
        </div>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/search" component={() => <Home data={data} />} />
          <Route path="/result" component={Result} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
