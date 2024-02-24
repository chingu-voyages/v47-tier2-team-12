import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import './App.css'
import { Todo_context } from "./components/Context/Context";

const App = () => {
  const { loading } = React.useContext(Todo_context);
  return (
    <>
      {
        loading ? <div class="lds-ring"><div></div><div></div><div></div><div></div></div> :
          <div className="app-wrapper">
            <Navbar />
            <div className="todo-body">
              <Sidebar />
              <Dashboard />
            </div>
          </div>

      }
    </>
  );
};

export default App;
