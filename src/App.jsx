import React, { useContext, useEffect } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import './App.css'
import { Todo_context } from "./components/Context/Context";
import useWindowSize from "./utilities/WindowScreen/useWindowsSize"


const App = () => {


  const { showSidebar, setshowSidebar } = useContext(Todo_context);
  const screenSize = useWindowSize()

  useEffect(() => {
    screenSize?.width > 1024 ? setshowSidebar(true) : setshowSidebar(false)
  }, [])
  const { loading } = React.useContext(Todo_context);
  return (
    <>
      {
        loading ? <div class="lds-ring"><div></div><div></div><div></div><div></div></div> :
          <div className="app-wrapper">
            <Navbar />
            <div className={showSidebar ? "todo-body" : "ShowSidebar-todo"}>

              {console.log(screenSize?.width > 1024, "state == >", showSidebar)}
              {
                showSidebar &&
                <Sidebar />}
              <div className="dashboard-laptop-sm">
                <Dashboard />
              </div>
            </div>
          </div>

      }
    </>

  );
};

export default App;
