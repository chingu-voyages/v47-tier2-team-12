import React from 'react';
import './Modal2.css';
import { ImCross } from "react-icons/im";

const Modal2 = () => {
    const [newActivity, setNewActivity] = React.useState({
        activityName: '',
        taskName: '',
        taskDescription: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewActivity(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleAddTask = () => {
        console.log(newActivity);
    };

    return (
        <div className='modal2-container'>
            <div className="modal2-inner-container">
                <div className="modal2-header">
                    <h3>Add more Tasks</h3>
                    <ImCross />
                </div>
                <div style={{ border: '1px solid black' }}>
                    <div>
                        <h3 className='task-heading'>Task Heading</h3>
                        <div className="modal2-task-container">
                            <div className="modal2-task-inner-container">
                                <label htmlFor="activityName">Activity Name:</label>
                                <input
                                    name='activityName'
                                    type="text"
                                    className='activityName'
                                    placeholder='Enter Activity Name'
                                    value={newActivity.activityName}
                                    onChange={handleInputChange}
                                />

                                <label htmlFor="taskName">Task Name:</label>
                                <input
                                    name='taskName'
                                    type="text"
                                    className='taskName'
                                    placeholder='Enter Task Name'
                                    value={newActivity.taskName}
                                    onChange={handleInputChange}
                                />

                                <label htmlFor="taskDescription">Task Description:</label>
                                <input
                                    name='taskDescription'
                                    type="text"
                                    className='taskDescription'
                                    placeholder='Enter Task Description'
                                    value={newActivity.taskDescription}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </div>
                    <button className='add-more-task-btn' >Add more Task</button>
                </div>
                <div className='modal2-container-footer'>
                    <button className='cancel-btn' >Cancel</button>
                    <button className='save-btn' onClick={handleAddTask}>Save</button>
                </div>
            </div>
        </div>
    );
};

export default Modal2;
