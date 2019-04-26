import React from 'react';

const Task = props => {

    return (
        <div className="task">
            <div className="taskheader">
                <div>{props.task.title}</div>
            </div>
            <hr />
            <div className="taskbody">{props.task.description}</div>
        </div>
    );
}
export default Task;