import React from "react";

const locations = [
  { name: "Auto centar Gavrić", city: "Novi Sad", address: "Gaudijeva 13" },
  { name: "Auto centar Ivković", city: "Novi Sad", address: "Mihaila Pupina 2" },
  { name: "Auto centar Klisa", city: "Novi Sad", address: "Ilije Birčanina 23" },
  { name: "Auto Centar Liman", city: "Novi Sad", address: "Pabla Pikasa 3" }
];

const Locations = () => {
  return (
    <>
    <div style={{ display: "flex", justifyContent: "space-around", margin: "100px 0"}}>
      {locations.map((location, index) => (
        <div key={index} style={{ background: "rgba(255,255,255,0.8)", padding: "10px 20px", borderRadius: "10px" }}>
          <h3>{location.name}</h3>
          <p style={{ color: "orange" }}>Adresa: {location.address}, {location.city}</p>
        </div>
      ))}
    </div>
    </>
  );
};

export default Locations;
