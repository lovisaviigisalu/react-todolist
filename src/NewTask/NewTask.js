import React from "react";
import AddNewTask from "./AddNewTask";

const NewTask = (props) => {
    const saveNewTaskHandler = (enteredNewTaskData) => {
        const taskData = {
            ...enteredNewTaskData,
            id: Math.random().toString(),
        };
        props.onAddNewTask(taskData);
    };

    return (
        <div>
            <AddNewTask onSaveNewTaskHandler={saveNewTaskHandler} />
        </div>
    );
};

export default NewTask;
