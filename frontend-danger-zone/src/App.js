import {LandingPage} from "./container/landingPage/LandingPage";
import NavBar from "./components/NavBar/NavBar";
import React from "react";

function App() {
  return (
    <div className="App">
        <NavBar/>
        <div style={{margin: "1rem"}}>
            <LandingPage/>
        </div>
    </div>
  );
}

export default App;
