import React from "react";

const cars = [
  {
    id: "dream",
    model: { code: "dream", name: "Dream Car" },
    image: "https://i.ibb.co/v4TJT978/blue-car.png",
    engines: ["dizel", "benzin", "hibrid"],
    defaultEngine: "benzin",
    colorHex: "#4776ba",
    finish: "sjajna",
    price: { fromEUR: 7899, toEUR: 43799 }
  },
  {
    id: "nido",
    model: { code: "nido", name: "Nidorino" },
    image: "https://i.ibb.co/tPJPSQK6/renault1.png",
    engines: ["dizel", "benzin", "hibrid"],
    defaultEngine: "dizel",
    colorHex: "#9aa0a6",
    finish: "sjajna",
    price: { fromEUR: 40639, toEUR: 58927 }
  },
  {
    id: "bulba",
    model: { code: "bulba", name: "Bulbasaur" },
    image: "https://i.ibb.co/hFqJfRNr/renault2.png",
    engines: ["dizel", "benzin", "hibrid"],
    defaultEngine: "hibrid",
    colorHex: "#b3b3b3",
    finish: "mat",
    price: { fromEUR: 27629, toEUR: 40062 }
  },
  {
    id: "mar",
    model: { code: "mar", name: "Mareep" },
    image: "https://i.ibb.co/gLwnYZqs/renault3.png",
    engines: ["benzin", "hibrid"],
    defaultEngine: "benzin",
    colorHex: "#c0392b",
    finish: "sjajna",
    price: { fromEUR: 3679, toEUR: 5335 }
  },
  {
    id: "char",
    model: { code: "char", name: "Charizard" },
    image: "https://i.ibb.co/vvKK2s4K/renault4.png",
    engines: ["dizel", "benzin", "hibrid"],
    defaultEngine: "benzin",
    colorHex: "#2c3e50",
    finish: "mat",
    price: { fromEUR: 22199, toEUR: 32189 }
  }
];

const selectedCarIndex = 0;

const Cars = () => {
  const selectedCar = cars[selectedCarIndex];

  return (
    <div  style={{
        flex: 1, // <-- ovo je ključno
        display: "flex",
        justifyContent: "space-between",
        padding: "40px 0", // padding umesto marginTop
        background: "white",
        boxSizing: "border-box",
      }}>
      <div>
            <img src={selectedCar.image} alt={selectedCar.model.name} style={{ width: "650px", height: "400px" }} />
      </div>
      <div style={{width: "30%"}}>
        <div style={{display: "flex", justifyContent: "space-between", marginTop: "50px"}}>
            <h3>Izračunaj cenu svog auta iz snova</h3>
            <p>Počevši od {selectedCar.price.fromEUR.toLocaleString()}€</p>
        </div>

        <div style={{display: "flex", justifyContent: "space-between", marginTop: "50px"}}>
            <p>Model automobila: {selectedCar.model.name}</p>
            <p>Tip motora: {selectedCar.defaultEngine}</p>
        </div>

        <div style={{display: "flex", justifyContent: "space-between", marginTop: "50px"}}>
             <p>Boja automobila: <span style={{ color: selectedCar.colorHex }}>{selectedCar.colorHex}</span></p>
            <p>Tip boje: {selectedCar.finish} boja</p>
        </div>

        <div style={{display: "flex", justifyContent: "space-between", marginTop: "50px"}}>
             <p>Opseg cene: {selectedCar.price.fromEUR}€ - {selectedCar.price.toEUR}€</p>
             <p>Kontakt mejl: primer@email.com</p>
        </div>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", padding: "10px", width: "20%", boxSizing: "border-box", gap: "10px"}}>
        {cars.map((car, index) => (
        <div
        key={car.id}
        style={{
            width: "calc(50% - 10px)",
            padding: "5px",
            boxSizing: "border-box",
            background: index === selectedCarIndex ? "orange" : "#e0e0e0",
            borderRadius: "10px",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "10px",
        }}
        >
        <img src={car.image} alt={car.model.name} style={{ width: "150px", height: "90px" }} />
        <span>Već od {car.price.fromEUR.toLocaleString()}€</span>
        </div>
    ))}
    </div>

    </div>
  );
};

export default Cars;
