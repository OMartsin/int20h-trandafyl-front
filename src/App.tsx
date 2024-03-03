import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import Events from "./pages/Events/Events";
import Studying from "./pages/Studying/Studying";
import Courses from "./pages/Courses/Courses";
import Schedule from "./pages/Schedule/Schedule";
import Header from "./components/Header/Header";
import Chats from "./pages/Chats/Chats";
import Profile from "./pages/Profile/Profile";
import Test from "./pages/Test/Test";

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
            path="/studying/*"
            element={
              <React.Fragment>
                <Header />
                <Studying />
              </React.Fragment>
            }
          />
          <Route
            path="/chats/*"
            element={
              <React.Fragment>
                <Header />
                <Chats />
              </React.Fragment>
            }
          />
          <Route
            path="/profile/*"
            element={
              <React.Fragment>
                <Header />
                <Profile />
              </React.Fragment>
            }
          />
          <Route
            path="/test/*"
            element={
              <React.Fragment>
                <Header />
                <Test />
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
