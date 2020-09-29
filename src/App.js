import React, { useState } from "react";
import "./App.css";
import Title from "./componenets/Title/Title";
import NavBar from "./componenets/NavBar/NavBar";
import SectionA from "./componenets/SectionA/SectionA";
import SectionB from "./componenets/SectionB/SectionB";
import TestCategory from "./componenets/TestCategory/TestCategory";
import QuickAccess from "./componenets/QuickAccess/QuickAccess";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Zoom from "react-reveal/Zoom";
import Jump from "react-reveal/Jump";

function App() {
  var itembg = "greenyellow";

  return (
    <Router>
      <div className="App">
        <Title />
        <div className="AppContainer">
          <div className="NavWrapper">
            <TestCategory className="Sticky" />
            <div className="SectionWrapper">
              <NavBar />
              <Route exact path="/">
                <SectionA />
                <Zoom>
                  <SectionB />
                </Zoom>{" "}
                <Jump>
                  <QuickAccess id="quick" heading="Quick Access" />
                  <QuickAccess heading="Dairy Products" />{" "}
                </Jump>
              </Route>
              <Route path="/about">
                <Jump>
                  <QuickAccess id="quick" heading="Quick Access" />

                  <QuickAccess heading="Dairy Products" />
                </Jump>
              </Route>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
