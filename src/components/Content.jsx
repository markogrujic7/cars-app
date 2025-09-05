import React from "react";
import Locations from "./Locations";
import Cars from "./Cars";

const Content = () => {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        height: "100%",
      }}
    >
      <div style={{ flex: 0.2 }}>
        <Locations />
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Cars />
      </div>
    </div>
  );
};

export default Content;
