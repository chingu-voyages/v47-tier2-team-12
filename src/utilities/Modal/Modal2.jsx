import React from 'react';
import './Modal2.css';
import { ImCross } from "react-icons/im";
import { Trash2 } from "react-feather";
import { nanoid } from "nanoid";
import { Todo_context } from '../../components/Context/Context';



const Modal2 = ({ showModal, setShowModal, updateItem }) => {
    const { projectData, setProjectData, globalData,
        setGlobalData } =
        React.useContext(Todo_context);
    const [countArray, setCountArray] = React.useState(['demoItem'])
    const [newActivity, setNewActivity] = React.useState([{
        taskName: '',
        taskDescription: '',
        days: [],
        id: nanoid(),
    }]);



    const handleInputChange = (e, ind) => {
        const { name, value } = e.target;


        setNewActivity(prevTasks => {
            return prevTasks?.map(task => {
                if (task.id === ind) {
                    if (name === 'days') {
                        const daysArray = value.split(',').map(day => day.trim());
                        return {
                            ...task,
                            days: daysArray
                        };
                    } else {
                        return {
                            ...task,
                            [name]: value
                        };
                    }
                }
                return task;
            });
        });

    }


    const handleAddTask = () => {
        const newItem = {
            taskName: '',
            taskDescription: '',
            days: [],
            id: nanoid(),
        };

        setNewActivity(prevActivity => [...prevActivity, newItem]);
        setCountArray(prevCountArray => [...prevCountArray, `item ${prevCountArray.length + 1}`]);
    };


    const handleDeleteRow = (index) => {
        const updatedArray = countArray.filter((item, ind) => ind !== index)
        console.log(updatedArray)
        setCountArray(updatedArray)
    }

    const handleSave = () => {
        setShowModal(!showModal);

        const updatedTasks = projectData.activityTypes.map((activityType) => {
            if (activityType.id === updateItem) {
                return {
                    ...activityType,
                    Tasks: [...activityType.Tasks, ...newActivity],
                };
            }
            return activityType;
        });


        const updatedProjectData = {
            ...projectData,
            activityTypes: updatedTasks,
        };

        const updateGlobalData = globalData.map(data => data.id === updatedProjectData.id ? updatedProjectData : data);
        console.log(updateGlobalData)
        // Set the updated projectData to the state
        setProjectData(updatedProjectData);

        // Set the updated globalData to the state
        setGlobalData(updateGlobalData);

    };

    return (
        <div className='modal2-container'>
            <div className="modal2-inner-container">
                <div className="modal2-header">
                    <h3>Add more Tasks</h3>
                    <ImCross onClick={() => setShowModal(!showModal)} size={15} className='cross-icon' />
                </div>
                <div style={{ border: '1px solid black' }}>
                    <div>
                        <h3 className='task-heading'>bgcfh</h3>
                        <div className="modal2-task-container">
                            {
                                countArray.map((item, index) => {
                                    return <div key={index} className="modal2-task-inner-container">


                                        <label htmlFor="taskName">Task Name:</label>
                                        <input
                                            name='taskName'
                                            type="text"
                                            className='taskName'
                                            placeholder='Enter Task Name'
                                            value={newActivity[index].taskName}
                                            onChange={(e) => handleInputChange(e, newActivity[index].id)}
                                        />

                                        <label htmlFor="taskDescription">Task Description:</label>
                                        <input
                                            name='taskDescription'
                                            type="text"
                                            className='taskDescription'
                                            placeholder='Enter Task Description'
                                            value={newActivity[index].taskDescription}
                                            onChange={(e) => handleInputChange(e, newActivity[index].id)}
                                        />
                                        <label htmlFor="DayName">Day Name :</label>
                                        <input
                                            name='DayName'
                                            type="text"
                                            className='DayName'
                                            placeholder='Enter Day Name'
                                            value={newActivity[index]}
                                            onChange={(e) => handleInputChange(e, newActivity[index].id)}
                                        />
                                        {index !== 0 && <span
                                            onClick={() => handleDeleteRow(index)}
                                        // style={{ display: ind === 0 ? "none" : "block" }}
                                        >
                                            <Trash2 size={20} color="red" />
                                        </span>}
                                    </div>

                                })
                            }

                        </div>
                    </div>
                    <button className='add-more-task-btn' onClick={handleAddTask} >Add more Task</button>
                </div>

                <div className='modal2-container-footer'>
                    <button className='cancel-btn' onClick={() => setShowModal(!showModal)}>Cancel</button>
                    <button className='save-btn' onClick={handleSave}>Save</button>
                </div>
            </div>
        </div >
    );
};

export default Modal2;
