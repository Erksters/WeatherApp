import React from "react";
import { Roller } from "react-awesome-spinners";

const Loading = (props) => {
  const minHeight = window.screen.height;
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: minHeight / 2,
        }}
      >
        <Roller color="blue" />
      </div>
    </>
  );
};

export default Loading;
