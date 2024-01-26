import React, { useContext } from "react";
import { Todo_context } from "../Context/Context";

const Dashboard = () => {
  const { projectData, setProjectData } = useContext(Todo_context);
  console.log(projectData, "project");
  return (
    <div className="w-full">
      {projectData?.activityTypes?.map((item, ind) => {
        return (
          <div key={ind}>
            <h3 className="font-weight-600 text-size-18">{item.activityName}</h3>
            <div>
              {item.Tasks.map((ele, ind) => {
                return <div key={ind}>{ele.taskName}</div>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Dashboard;
