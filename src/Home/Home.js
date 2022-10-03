import React, { useState } from "react";
import Loading from "../Loading/Loading";
import "./Home.css";
import swal from "sweetalert";
import Table from "../Table/Table";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

import { base_url } from "../api";
import RegisterDate from "../RegisterDate/RegisterDate";
import ShowResults from "../ShowResults/ShowResults";

const Home = () => {
  const [zipCode, setZipCode] = useState("");
  const [zipCheckBox, setZipCheckBox] = useState(false);
  const [cityName, setCityName] = useState("");
  const [DateOfEvent, setDateOfEvent] = useState(new Date());
  const [status, setStatus] = useState(0);
  const [dataArray, setDataArray] = useState([]);

  console.log(dataArray);
  const getProperDate = () => {
    return `${DateOfEvent.getFullYear()}-${
      DateOfEvent.getMonth() + 1
    }-${DateOfEvent.getDate()}`;
  };

  const getAPICall = () => {
    return `${base_url}&zipCode=${zipCode}&${getProperDate()}`;
  };

  const Reset = () => {
    setZipCode("");
    setZipCheckBox(false);
    setCityName("");
    setDateOfEvent(new Date());
    setStatus(0);
    setDataArray([]);
  };

  const HandleSubmit = async () => {
    setStatus(1);
    if (zipCode == "") {
      swal(
        `You're currently searching for an empty Zip Code`,
        "Please select a row from the table or try one that you know."
      );
      return;
    }

    await fetch(getAPICall())
      .then((res) => res.json())
      .then((data) => {
        if (data.length === 0) {
          swal("We didn't find information for that area. Please try another.");
        }

        setDataArray(data);
        setStatus(0);
      });
  };

  if (status !== 0) {
    return <Loading />;
  }

  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <br />

      <div
        style={{
          width: "80vw",
          display: "flex",

          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {dataArray.length === 0 ? (
          <>
            <h2>Search For Data With the Tools Below</h2>
            <br />
            <RegisterDate
              DateOfEvent={DateOfEvent}
              setDateOfEvent={setDateOfEvent}
            />
            <br />
            <div style={{ display: "flex", flexDirection: "row" }}>
              <label style={{ marginRight: "20px" }}>Zipcode</label>

              <input
                value={zipCheckBox}
                checked={zipCheckBox}
                maxLength={5}
                minLength={5}
                onChange={(e) => {
                  setZipCheckBox(!zipCheckBox);
                }}
                type="checkbox"
              />
            </div>
            <br />
            <br />
            {zipCheckBox ? (
              <>
                <h2>Search by Zip Code</h2>
                <br />

                <input
                  className="SearchBar"
                  type="text"
                  maxLength={5}
                  placeholder="Search for a Zip code"
                  value={zipCode}
                  onChange={(e) => {
                    setZipCode(e.target.value);
                  }}
                />
              </>
            ) : (
              <>
                <h2>Search by City Name</h2>
                <br />

                <input
                  className="SearchBar"
                  type="text"
                  placeholder="Search for a Post by Title"
                  value={cityName}
                  onChange={(e) => {
                    setCityName(e.target.value);
                  }}
                />
              </>
            )}

            <button
              style={{ marginTop: "20px", marginBottom: "20px" }}
              className="Simple_Button  Shadow"
              onClick={HandleSubmit}
            >
              Search Weather Data
            </button>
            <Table
              cityName={cityName}
              zipCode={zipCode}
              zipCheckBox={zipCheckBox}
              setZipCode={setZipCode}
              setCityName={setCityName}
            />
          </>
        ) : (
          <>
            <button
              style={{ marginTop: "20px", marginBottom: "20px" }}
              className="Simple_Button  Shadow"
              onClick={Reset}
            >
              Reset
            </button>
            <ShowResults dataArray={dataArray} />
          </>
        )}
        <br />
        <br />
      </div>
    </div>
  );
};

export default Home;
