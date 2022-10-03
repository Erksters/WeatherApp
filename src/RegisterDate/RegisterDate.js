import React from "react";
import Button from "react-bootstrap/Button";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const RegisterDate = (props) => {
  const { userFlow, setUserFlow, DateOfEvent, setDateOfEvent } = props;

  const HandleSubmit = () => {
    console.log("Submitting Coin");
    if (DateOfEvent.getTime() <= new Date().getTime()) {
      setUserFlow(userFlow + 1);
    }
  };

  return (
    <div>
      <br />
      <div className="centerDiv">
        <h3>Select a Date</h3>
      </div>
      <br />
      <div className="centerDiv">
        <DayPicker
          mode="single"
          selected={DateOfEvent}
          onSelect={setDateOfEvent}
        />
      </div>
      <br />
    </div>
  );
};

export default RegisterDate;
