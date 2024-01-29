import React, { useContext } from "react";
import { Todo_context } from "../Context/Context";
import './Dashboard.css'

const Dashboard = () => {
  const { projectData, setProjectData } = useContext(Todo_context);
  // console.log(projectData, "project");
  return (
    <div className={`activity-container `}>
      {projectData?.activityTypes?.map((item, ind) => {
        return (
          <div key={ind} className="activity-inner-container">
            <h3 className=" font-weight-600  font-bold activity-name  ">{item.activityName}</h3>
            <div>
              {item.Tasks.map((ele, ind) => {
                return <div className="tasks pl-8" key={ind}>
                  <div className="flex gap-8 ">
                    <p className="inline days">{ele.days[0]}</p>
                    {ele.taskName}
                  </div>
                </div>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Dashboard;
