import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import Events from "./pages/Events/Events";
import Performance from "./pages/Performance/Performance";
import Courses from "./pages/Courses/Courses";
import Schedule from "./pages/Schedule/Schedule";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Include the header on all pages except the home page */}
          <Route
            path="/courses/*"
            element={
              <React.Fragment>
                <Header />
                <Courses />
              </React.Fragment>
            }
          />
          <Route
            path="/events/*"
            element={
              <React.Fragment>
                <Header />
                <Events />
              </React.Fragment>
            }
          />
          <Route
            path="/schedule/*"
            element={
              <React.Fragment>
                <Header />
                <Schedule />
              </React.Fragment>
            }
          />
          <Route
            path="/performance/*"
            element={
              <React.Fragment>
                <Header />
                <Performance />
              </React.Fragment>
            }
          />
          <Route path="/" element={<Auth />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
