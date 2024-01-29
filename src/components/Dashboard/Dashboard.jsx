import React, { useContext } from "react";
import { Todo_context } from "../Context/Context";
import './Dashboard.css'
import { Trash2 } from "react-feather";


const Dashboard = () => {
  const { projectData, setProjectData } = useContext(Todo_context);
  // console.log(projectData, "project");

  function handleDelete(id) {
    const newData = projectData?.activityTypes.map((item) => ({
      ...item,
      Tasks: item.Tasks.filter((task, index) => task.id !== id),
    }));

    setProjectData(newData);
    console.log(newData);
    console.log(Math.random())
  }




  return (
    <div className={`activity-container `}>
      {projectData?.activityTypes?.map((item, ind) => {
        return (
          <div key={ind} className="activity-inner-container">
            <h3 className=" font-weight-600  font-bold activity-name  ">{item.activityName}</h3>
            <div>
              {item.Tasks.map((ele, index) => {
                return <div className="tasks pl-8" key={index}>
                  <div className="flex gap-8 ">
                    <p className="inline days">{ele.days[0]}</p>
                    {ele.taskName}
                    <button onClick={() => handleDelete(ele.id)}>
                      <Trash2 className="trash-icon" size={20} color="red" />
                    </button>
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
