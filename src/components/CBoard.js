import React, { useMemo, useCallback } from "react";
import { connect } from "react-redux";

import { setCurrentCard as setCurrentCardAction } from "../store/actionCreators";

import "./CBoard.scss";
import CCard from "./CCard";

const formatTime = (time) => {
  const date = new Date(time);
  const hours = `${date.getHours()}`.padStart(2, "0");
  const minutes = `${date.getMinutes()}`.padStart(2, "0");
  const seconds = `${date.getSeconds()}`.padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
};

const renderTask = (value) => {
  const { timeStart, timeEnd } = value;
  return (
    <CCard
      {...value}
      onCardClick={() => value.onClick(value)}
      timeStart={formatTime(timeStart)}
      key={`id-${value.id}`}
      timeEnd={timeEnd ? formatTime(timeEnd) : null}
    />
  );
};

const renderTasks = (data) => {
  const tasks = data.map(renderTask);
  return tasks;
};

function CBoard({ tasks, setCurrentCard }) {
  const onCardClick = useCallback(
    (card) => {
      setCurrentCard(card.id);
    },
    [setCurrentCard]
  );

  const mappedTasks = useMemo(
    () =>
      tasks.map((task) => ({
        ...task,
        onClick: onCardClick,
      })),
    [tasks, onCardClick]
  );
  const renderedTasks = renderTasks(mappedTasks);

  return <div className="board">{renderedTasks}</div>;
}

const mapStateToProps = null;
const mapDispatchToProps = (dispatch) => ({
  setCurrentCard: (id) => dispatch(setCurrentCardAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CBoard);
