
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
          <div key={ind} >
            <div className="activity-inner-container">
              <div className="activity-name-container">
                <h3 className="activity-name">{item.activityName}</h3>
              </div>
              <div className="day-container">hi my name is pritam Chakroborty</div>
            </div>
            <div >
              {item.Tasks.map((ele, index) => {
                return <div className="tasks-container" key={index}>
                  <div className="task-inner-container">
                    <div className="task-inner-container-2">
                      <div>
                        <p className=" days">{ele.days[0]}</p>
                        <p className="task-name">{ele.taskName}</p>
                      </div>
                      <button className="trash-icon" onClick={() => handleDelete(ele.id)}>
                        <Trash2 size={20} />
                      </button>
                    </div>
                    <div>hi my name is pritam Chakroborty</div>
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