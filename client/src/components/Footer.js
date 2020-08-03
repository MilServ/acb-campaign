import React from "react";
import "../App.css";
import owlLogo from "./acblogo.jpg";

function Footer() {
  return (
    <div className="container" style={{ borderTop: "solid #68813c 8px" }}>
      <header
        className="App-header text-center"
        style={{
          maxHeight: "85px",
          padding: "15px",
          paddingBottom: "10px",
        }}
      >
        <img src={owlLogo} className="App-logo" alt="logo" />
      </header>
      {/* <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
       
      </a> */}
    </div>
  );
}

export default Footer;
