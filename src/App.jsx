import React from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Content />
      </div>
      <Footer />
    </div>
  );
};

export default App;
