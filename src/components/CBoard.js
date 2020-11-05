import React from "react";

import "./CBoard.scss";
import CCard from "./CCard";

const formatTime = (time) => {
  const date = new Date(time);
  return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};

const renderTask = (value) => {
  const { timeStart, timeEnd } = value;
  return (
    <CCard
      {...value}
      timeStart={formatTime(timeStart)}
      timeEnd={timeEnd ? formatTime(timeEnd) : null}
    />
  );
};

const renderTasks = (data) => {
  const tasks = data.map(renderTask);
  return tasks;
};

function CBoard({ tasks }) {
  const renderedTasks = renderTasks(tasks);
  return <div className="board">{renderedTasks}</div>;
}

export default CBoard;
