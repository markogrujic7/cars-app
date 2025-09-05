import React from "react";

const Footer = () => {
  return (
    <footer style={{display: "flex", justifyContent: "space-between", background: "#0a2440", color: "#fff", textAlign: "center", padding: "30px 0px"}}>
        <div style={{display: "flex", justifyContent: "space-between", width: "50%", marginLeft: "30px"}}>
            <span>Pravna obaveštenja</span>
            <span>Politika privatnosti</span>
            <span>Kolačići</span>
            <span>Opšti podaci o kompaniji</span>
        </div>
      <span style={{width: "25%"}}>© CarAuto-Srbija</span>
    </footer>
  );
};

export default Footer;
