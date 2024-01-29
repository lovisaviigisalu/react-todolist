import React from "react";

const TaskDate = (props) => {
    const formattedDate = props.date;

    return (
        <div >
            <div >{formattedDate}</div>
        </div>
    );
};

export default TaskDate;