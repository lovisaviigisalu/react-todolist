import React, { useState } from "react";
import Tasks from "./components/Tasks";
import NewTask from "./NewTask/NewTask";

const initialData = [
    {
        id: 1,
        task: 'Write a programm',
        deadline: '20.01.2025',
    },
    {
        id: 2,
        task: 'Write to a friend about your birthday',
        deadline: '6.06.2025',
    },
    {
        id: 3,
        task: 'Be happy!',
        deadline: '5.03.2024',
    },
];

const App = () => {
    const [data, setData] = useState(initialData);

    const addNewTaskHandler = (newTask) => {
        setData((previousTasks) => [newTask, ...previousTasks]);
    };
    const deleteTaskHandler = (taskId) => {
        setData((previousTasks) => previousTasks.filter((task) => task.id !== taskId));
    };


    return (
        <div className="App">
            <NewTask onAddNewTask={addNewTaskHandler} />
            <Tasks taskData={data} onDeleteTask={deleteTaskHandler} />
        </div>
    );
};

export default App;
