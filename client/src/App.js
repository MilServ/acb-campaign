import React from "react";
import Header from "../src/components/Header";
import "./App.css";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="container">
      <Header />
      <LandingPage />
    </div>
  );
}

export default App;
