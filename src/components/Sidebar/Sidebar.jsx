import React, { useContext, useState } from "react";
import todo_global_data from "../Data/Data";
import "./Sidebar.css";
import { Todo_context } from "../Context/Context";
const Sidebar = () => {
  const { setProjectData } = useContext(Todo_context);
  const [currentSelectedInd,setCurrentSelectedInd]=useState(null)
  return (
    <aside className="app-sidear flex flex-column gap-2 p-2">
      {todo_global_data.map((ele, ind) => {
        return (
          <div
            key={ind}
            className={`app-sidebar__item flex p-6 items-center justify-between gap-6 c-pointer ${currentSelectedInd === ind ? "selected":""}`}
            onClick={()=>{
              setProjectData(ele);
              setCurrentSelectedInd(ind)
            }}
          >
            <h3>{ele.categoryName}</h3>{" "}
            <span className="p-6 border-rounded-20">
              {ele.activityTypes.length}
            </span>
          </div>
        );
      })}
      <div className="pt-2 m-4">
        <button className="w-full p-4 c-pointer">Add More Project</button>
      </div>
    </aside>
  );
};

export default Sidebar;
