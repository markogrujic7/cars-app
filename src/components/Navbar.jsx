import React from "react";

const Navbar = () => {
  return (
    <nav style={{
      backgroundColor: "#dde0e9",
      padding: "20px",
      display: "flex",
      justifyContent: "center"
    }}>
      <a style={{width: "150px", textAlign: "center"}} href="">Akcija</a>
      <a style={{width: "150px", textAlign: "center"}} href="">Naša priča</a>
      <a style={{width: "150px", textAlign: "center"}} href="" ><img src="https://i.ibb.co/cXh6GXGK/car-logo.png" alt="" style={{width: "40px", height: "auto"}}/></a>
      <a style={{width: "150px", textAlign: "center"}} href="">Informacije</a>
      <a style={{width: "150px", textAlign: "center"}} href="">Ponuda</a>
    </nav>
  );
};

export default Navbar;
