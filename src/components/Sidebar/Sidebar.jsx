import React, { useContext, useState } from "react";
import { Todo_context } from "../Context/Context";
import Modal from "../../utilities/Modal/Modal";
import "./Sidebar.css";
import { Trash2 } from "react-feather";
import Dashboard from "../Dashboard/Dashboard";

const Sidebar = () => {
  const { setProjectData, setShowModal, globalData, setGlobalData } =
    useContext(Todo_context);
  const [currentSelectedInd, setCurrentSelectedInd] = useState(null);
  const [showTask, setShowTask] = useState(true)
  const [categoryName, setCategoryName] = useState("");
  const [addNewActivity, setAddNewActivity] = useState([
    {
      activityName: "",
      taskName: "",
      taskDescription: "",
    },
  ]);



  const handleInput = (event, type, ind) => {
    const value = event.target.value;
    const updatedActivities = [...addNewActivity];
    updatedActivities[ind][type] = value;
    setAddNewActivity(updatedActivities);
  };
  const handleActivitySave = () => {
    const newData = addNewActivity.map((ele) => ({
      activityName: ele.activityName,
      Tasks: [
        {
          taskName: ele.taskName,
          taskDescription: ele.taskDescription,
          days: ["monday"],
        },
      ],
    }));
    const temp = {
      categoryName: categoryName,
      activityTypes: newData,
    };
    setGlobalData([...globalData, temp]);
    setShowModal(false);
  };
  const handleAddNewActivity = () => {
    setAddNewActivity([
      ...addNewActivity,
      {
        activityName: "",
        taskName: "",
        taskDescription: "",
      },
    ]);
  };
  const handleDeleteRow = (index) => {
    const res = addNewActivity.filter(
      (ele, ind) => ind !== index
    );
    setAddNewActivity(res);
  };

  return (
    <aside className="app-sidear  flex gap-8 p-2">
      {globalData.map((ele, ind) => {
        return (
          <div>

            <div
              key={ind}
              className={`app-sidebar__item  flex  items-center justify-between gap-12  c-pointer ${currentSelectedInd === ind ? "selected" : ""
                }`}
              onClick={() => {
                setProjectData(ele)
                setCurrentSelectedInd(ind);
              }}
            >
              <h3 className="categoryName">{ele.categoryName}</h3>{" "}
              <span className="p-6 border-rounded-20">
                {ele.activityTypes.length}
              </span>
            </div>

          </div>

        );
      })}
      <div className="pt-2 m-4">
        <button
          className="w-full p-4 c-pointer"
          onClick={() => setShowModal(true)}
        >
          Add More Project
        </button>
      </div>
      <Modal
        title="Add New Category"
        footer={
          <>
            <button
              className="p-8 c-pointer"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
            <button className="p-8 c-pointer" onClick={handleActivitySave}>
              Save
            </button>
          </>
        }
        onClose={() => setShowModal(false)}
      >
        <div className="flex flex-column gap-2">
          <div>
            <label>Category Name:</label>
            <br />
            <input
              type="text"
              placeholder="Enter category name"
              className="p-4"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
            />
          </div>
          <div className="activity-card p-8 mt-8">
            {addNewActivity.map((ele, ind) => {
              return (
                <div
                  key={ind}
                  className={`flex ${ind !== 0 ? "gap-20 items-end" : "justify-between"
                    } `}
                >
                  <div className="flex gap-8 justify-between">
                    <div>
                      <label>Activity Name:</label>
                      <br />
                      <input
                        type="text"
                        placeholder="Enter activity name"
                        className="p-4"
                        value={addNewActivity.activityName}
                        onChange={(e) => handleInput(e, "activityName", ind)}
                      />
                    </div>
                    <div>
                      <label>Task Name:</label>
                      <br />
                      <input
                        type="text"
                        placeholder="Enter activity task"
                        className="p-4"
                        value={addNewActivity.taskName}
                        onChange={(e) => handleInput(e, "taskName", ind)}
                      />
                    </div>
                    <div>
                      <label>Task Description:</label>
                      <br />
                      <input
                        type="text"
                        placeholder="Enter task description"
                        className="p-4"
                        value={addNewActivity.taskDescription}
                        onChange={(e) => handleInput(e, "taskDescription", ind)}
                      />
                    </div>
                  </div>
                  <span
                    className="c-pointer"
                    title="delete"
                    onClick={() => handleDeleteRow(res)}
                    style={{ display: ind === 0 ? "none" : "block" }}
                  >
                    <Trash2 size={20} color="red" />
                  </span>
                </div>
              );
            })}
          </div>
          <div className="flex pt-4">
            {" "}
            <button
              className="c-pointer"
              onClick={() => handleAddNewActivity()}
            >
              Add more activity
            </button>
          </div>
        </div>
      </Modal>
    </aside>
  );
};
export default Sidebar;
