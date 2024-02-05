import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import './App.css'

const App = () => {
  return (
    <div className="app-wrapper">
      <Navbar />
      <div className="todo-body">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
