import React from 'react';

import './CBoard.css';
import CCard from './CCard';

const formatTime = (time) => {
    const date = new Date(time);
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

const renderTask = (value) => {
    const {id, name, timeStart, timeEnd} = value;
    return(
        <CCard
            id={id}
            name={name}
            timeStart={formatTime(timeStart)}
            timeEnd={timeEnd ? formatTime(timeEnd) : null}
        />
    )
}

const renderTasks = (data) => {
    const tasks = data.map(renderTask);
    return tasks;
}

function CBoard({tasks}){
    const renderedTasks = renderTasks(tasks);
    return(
        <div class="board">
            {renderedTasks}
        </div>
    );
}

export default CBoard;