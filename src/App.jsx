import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div className="app-wrapper">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
