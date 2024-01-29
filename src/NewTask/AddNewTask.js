import './AddNewTask.css';
import { useState } from "react";

const AddNewTask = (props) => {
    const [userInput, setUserInput] = useState({
        enteredTask: '',
        enteredDate: ''
    });

    const taskChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredTask: event.target.value
        });
    };

    const dateChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredDate: event.target.value
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const taskData = {
            enteredTask: userInput.enteredTask,
            enteredDate: userInput.enteredDate
        };
        props.onSaveNewTaskHandler(taskData);

        setUserInput({
            enteredTask: '',
            enteredDate: ''
        });
    };

    return (
        <form className="AddNew" onSubmit={submitHandler}>
            <div>
                <div>
                    <label>Task</label>
                    <input type="text" onChange={taskChangeHandler} value={userInput.enteredTask} />
                </div>
                <div>
                    <label>Deadline</label>
                    <input type="date" min="2023-01-01" max="2026-01-01" onChange={dateChangeHandler} value={userInput.enteredDate} />
                </div>
            </div>
            <div>
                <button type="submit">Add Task</button>
            </div>
        </form>
    );
};

export default AddNewTask;
