import React, { useContext, useState } from "react";
import { Todo_context } from "../Context/Context";
import "./Dashboard.css";
import { Trash2 } from "react-feather";
import { FaRegPenToSquare } from "react-icons/fa6";
import Modal2 from "../../utilities/Modal/Modal2";


const Dashboard = () => {
  const { projectData, setProjectData, globalData,
    setGlobalData, generateMonthData } = useContext(Todo_context);

  const [checkedState, setCheckedState] = useState(() => {
    const localStorageData = localStorage.getItem('checkedValue');
    return localStorageData ? JSON.parse(localStorageData) : {};
  });

  const [showModal, setShowModal] = React.useState(false);
  const [updateItem, setUpdateItem] = React.useState(null)
  const monthData = generateMonthData();


  React.useEffect(() => {

    const tempdata = globalData[0]
    setProjectData(tempdata)

  }, [])

  function handleDelete(id) {
    // Create a new array with updated tasks excluding the one with the specified id
    const updatedTasks = projectData.activityTypes.map((activityType) => ({
      ...activityType,
      Tasks: activityType.Tasks.filter((task) => task.id !== id),
    }));

    /* Create a new array with updated activityTypes
    const updatedActivityTypes = projectData.activityTypes.map(
      (activityType, index) => ({
        ...activityType,
        Tasks: updatedTasks[index].Tasks,
      })
     );*/

    // Create a new projectData object with the updated tasks
    const updatedProjectData = {
      ...projectData,
      activityTypes: updatedTasks,
    };

    const updateGlobalData = globalData.map(data => data.id === updatedProjectData.id ? updatedProjectData : data)

    // Set the updated projectData to the state
    setProjectData(updatedProjectData);

    // Set the updated globalData to the state
    setGlobalData(updateGlobalData)


    localStorage.setItem('globalData', JSON.stringify(updateGlobalData));

  }



  function handleCheck(taskId, date) {
    const key = `${taskId}_${date}`;

    const newCheckedState = { ...checkedState, [key]: !checkedState[key] };

    localStorage.setItem('checkedValue', JSON.stringify(newCheckedState));

    setCheckedState(newCheckedState);
  }



  function handleTaskUpdate(id, name) {
    setShowModal(!showModal)
    setUpdateItem(
      {
        ind: id,
        name: name
      }
    )

  }

  return (
    <div className={`activity-container `}>
      {projectData?.activityTypes?.map((item, ind) => {
        return (
          <div key={ind}>

            <div className="activity-inner-container">
              <div className="activity-name-container">
                <h3 className="activity-name">{item.activityName}</h3>
                <FaRegPenToSquare
                  className="update-icon"
                  size={25}
                  onClick={() => handleTaskUpdate(item.id, item.activityName)}
                />

              </div>
              <div className="day-container">
                {monthData.map((item, index) => {
                  return (
                    <>
                      <div key={index} className="day-inner-container ">
                        <p>{item.date}</p>
                        <p>{item.nameOfDay}</p>
                      </div>
                      {(index % 7 == 6) &&
                        <div className="week-end" >WK</div>
                      }
                    </>
                  );
                })}
              </div>
            </div>
            <div>
              {item.Tasks.map((task, index) => {
                return (
                  <div className="tasks-container" key={index}>
                    <div className="task-inner-container">
                      <div className="task-inner-container-2">
                        <div>
                          <p className=" days">{task.days[0]}</p>
                          <p className="task-name">{task.taskName}</p>
                        </div>
                        <button
                          className="trash-icon"
                          onClick={() => handleDelete(task.id)}
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                      <div className="main-div-checkboxes">
                        {monthData.map((day, index) => {
                          const key = `${task.id}_${day.date}`;
                          // console.log(checkedState[key])

                          return (
                            <>
                              <div key={index} className="check-boxes-inner-container ">
                                <input
                                  className="input-checked-box"
                                  id={day.date}
                                  type="checkbox"
                                  checked={checkedState[key] || false}
                                  onChange={() => handleCheck(task.id, day.date)}

                                />
                              </div>
                              {(index % 7 == 6) &&
                                <div className="week-end" ><p className="visiblity-hidden">WK</p></div>
                              }
                            </>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}

              {
                item.Tasks.length === 0 && <div style={{
                  backgroundColor: 'rgba(68, 56, 202, 0.705)',
                  height: '5em',
                  textAlign: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',

                }}><h1>No task under this section</h1></div>
              }
            </div>
          </div>
        );
      })}
      {showModal && <Modal2
        updateItem={updateItem}
        showModal={showModal}
        setShowModal={setShowModal}
      />}

    </div>
  );
};

export default Dashboard;
