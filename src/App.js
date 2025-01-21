import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MiniDrawer from "./Layout/Layout";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <MiniDrawer>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MiniDrawer>
    </Router>
  );
};

export default App;
