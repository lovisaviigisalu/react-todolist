import './ListItem.css'
import { useState} from "react";
import TaskDate from "./TaskDate";

const ListItem = (props) => {
    const [task, setTitle] =useState(props.taskData.task)
    const clickHandler = () =>{
        console.log(`You did the task: ${task}`)
        props.onDeleteTask(props.taskData.id);
    }
    return(
        <div className="task">
            <h2>{props.taskData.task}</h2>
            <div className="deadline_and_button">
                <TaskDate date={props.taskData.deadline} />
            <button className='button' onClick={clickHandler}>Done!</button>
            </div>
        </div>

    )
}

export default ListItem