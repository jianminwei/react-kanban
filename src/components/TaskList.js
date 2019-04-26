import React from 'react';
import Task from './Task';
const TaskList = props => {
    return (
        <div className="tasklist">
            <div className="tasklisttitle">
                <strong>{props.status}</strong>
            </div>
            {props.tasks.map(task => (
                <Task key={task.id} task={task} />
            ))}
        </div>
    );
}

export default TaskList;