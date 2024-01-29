import React, { useState, useEffect } from "react";
import ListItem from "./ListItem";
import "./Tasks.css";
import TaskYearFilter from "./TaskYearFilter";

const Tasks = (props) => {
    const [filteredData, setFilteredData] = useState(props.taskData);

    const handleFilterChange = (selectedYear) => {
        if (selectedYear) {
            const filteredTasks = props.taskData.filter(
                (task) => task.deadline.includes(selectedYear)
            );
            setFilteredData(filteredTasks);
        } else {
            setFilteredData(props.taskData);
        }
    };

    useEffect(() => {
        // Update filtered data when taskData changes
        setFilteredData(props.taskData);
    }, [props.taskData]);

    return (
        <div className="AllTheTasks">
            <TaskYearFilter onFilterChange={handleFilterChange} />
            {filteredData.map((newTask) => (
                <ListItem taskData={newTask} key={newTask.id} onDeleteTask={props.onDeleteTask} />
            ))}
        </div>
    );
};

export default Tasks;
