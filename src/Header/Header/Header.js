import React from "react";
import NavigationBar from "../NavigationBar/NavBar";
import "./Header.css";
import { base_url } from "../../api";

const Header = () => {
  return (
    <>
      <div className="Header">
        <a href={base_url} style={{ textDecoration: "none" }}>
          <div
            id="Title"
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <h1 style={{ display: "none" }}>Welcome to the WeatherApp</h1>
            <h1 className="Header_Title">WeatherApp</h1>
          </div>

          <div
            id="Title"
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <p className="Header_SubTitle">See Weather Now</p>
          </div>
        </a>
        <div className="Nav_Bar ">
          <NavigationBar />
        </div>
      </div>
    </>
  );
};

export default Header;
