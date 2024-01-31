import React, { useContext } from "react";
import { Todo_context } from "../Context/Context";
import './Dashboard.css'
import { Trash2 } from "react-feather";


const Dashboard = () => {
  const { projectData, setProjectData } = useContext(Todo_context);
  // console.log(projectData, "project");

  function handleDelete(id) {
    // Create a new array with updated tasks excluding the one with the specified id
    const updatedTasks = projectData.activityTypes.map(activityType => ({
      ...activityType,
      Tasks: activityType.Tasks.filter(task => task.id !== id),
    }));

    // Create a new array with updated activityTypes
    const updatedActivityTypes = projectData.activityTypes.map((activityType, index) => ({
      ...activityType,
      Tasks: updatedTasks[index].Tasks,
    }));

    // Create a new projectData object with the updated activityTypes
    const updatedProjectData = {
      ...projectData,
      activityTypes: updatedActivityTypes,
    };

    // Set the updated projectData to the state
    setProjectData(updatedProjectData);

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
