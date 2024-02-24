import React, { useContext, useState } from "react";
import { Todo_context } from "../Context/Context";
import Modal from "../../utilities/Modal/Modal";
import "./Sidebar.css";
import { Trash2 } from "react-feather";

const Sidebar = () => {
  const { setProjectData, setShowModal, globalData, setGlobalData } =
    useContext(Todo_context);
  const [currentSelectedInd, setCurrentSelectedInd] = useState(0);
  const [categoryName, setCategoryName] = useState("");
  const [addNewActivity, setAddNewActivity] = useState([
    {
      id: 0,
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
    setAddNewActivity([
      {
        id: 0,
        activityName: "",
        taskName: "",
        taskDescription: "",
      },
    ]);
    const temp = {
      categoryName: categoryName,
      activityTypes: newData,
    };
    const updatedGlobalData = [...globalData, temp];
    setGlobalData(updatedGlobalData);
    localStorage.setItem('globalData', JSON.stringify(updatedGlobalData));
    setShowModal(false);

  };
  function generateUniqueNumber() {
    const timestamp = new Date().getTime();
    const randomNumber = Math.floor(Math.random() * 1000);
    const uniqueNumber = timestamp + randomNumber;
    return uniqueNumber;
  }
  const handleAddNewActivity = () => {
    const { id } = addNewActivity;
    setAddNewActivity([
      ...addNewActivity,
      {
        id: generateUniqueNumber(),
        activityName: "",
        taskName: "",
        taskDescription: "",
      },
    ]);
  };
  const handleDeleteRow = (index) => {
    const res = addNewActivity.filter((ele, ind) => ind !== index);
    setAddNewActivity(res);
  };

  return (
    <aside className="app-sidear flex flex-column gap-2 p-2">
      {globalData.map((ele, ind) => {
        return (
          <div
            key={ind}
            className={`app-sidebar__item flex m-4 items-center justify-between gap-6 c-pointer ${currentSelectedInd === ind ? "selected" : ""
              }`}
            onClick={() => {
              setProjectData(ele);
              setCurrentSelectedInd(ind);
            }}
          >
            <h3 className="color-white">{ele.categoryName}</h3>{" "}
            <span className="border-rounded-20 activity-type-length">
              {ele.activityTypes.length}
            </span>
          </div>
        );
      })}
      <Modal
        title="Add New Category"
        footer={
          <>
            <button
              className="c-pointer cancel-btn"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
            <button className="c-pointer save-btn" onClick={handleActivitySave}>
              Save
            </button>
          </>
        }
        onClose={() => setShowModal(false)}
      >
        <div className="flex flex-column gap-2">
          <div>
            <label className="font-weight-500 text-size-16">Category Name:</label>
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
                  key={ele?.id}
                  className={`flex ${ind !== 0 ? "gap-20 items-end" : "justify-between"
                    } `}
                >
                  <div className="flex gap-8 justify-between flex-wrap">
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
                    onClick={() => handleDeleteRow(ind)}
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
              className="c-pointer add-more-activity-btn"
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
