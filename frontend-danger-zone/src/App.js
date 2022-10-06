import {LandingPage} from "./container/landingPage/LandingPage";
import NavBar from "./components/NavBar/NavBar";
import React from "react";
import { HashRouter, Route, Routes } from 'react-router-dom';
import {routes} from "./routes/routes";
import Drawer from "./components/NavBar/Drawer";

function App() {
  return (
      <HashRouter>
          <Routes>
              {routes.map((route, i) => (
                  <Route key={i} {...route} />
              ))}
          </Routes>
      </HashRouter>
  );
}

export default App;
