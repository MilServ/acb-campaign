import React from "react";
import "../App.css";
import owlLogo from "./acblogo.jpg";

function Header() {
  return (
    <div className="container" style={{ borderTop: "solid #68813c 10px" }}>
      <header
        className="App-header text-center"
        style={{
          maxHeight: "70px",
          paddingTop: "18px",
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

export default Header;
