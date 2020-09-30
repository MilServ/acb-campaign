import React, { useEffect } from "react";
import Header from "../src/components/Header";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import { initGA, logPageView } from "./utils/analytics";

function App() {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  });
  return (
    <div className="container">
      <Header />
      <LandingPage />
    </div>
  );
}

export default App;
