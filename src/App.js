import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Footer from "./Footer/Footer";
import Header from "./Header/Header/Header";
import Home from "./Home/Home";
import References from "./References/References";
import AppSEO from "./SEO/AppSEO";

const App = () => {
  return (
    <div className="App">
      <AppSEO />
      <br />
      <Header />
      <div className="Page_Parent">
        <Router basename="/#/">
          <Switch>
            <Route path="/references" component={References} />
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
};

export default App;
