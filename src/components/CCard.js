import React from "react";
import "./CCard.scss";

const isClosedElement = (timeEnd) => (
  <>
    <hr />
    <p className="time">Closed: {timeEnd}</p>
  </>
);

const tooltipElement = (hoverValue, showValue) => (
  <div className="tooltip">
    <h1 className="name">{hoverValue}</h1>
    <span className="id">{showValue}</span>
  </div>
);

const CCard = ({
  id,
  name,
  timeStart,
  timeEnd = null,
  classes = [],
  isActive,

  onCardClick,
}) => (
  <div className="taskcard-wrapper">
    <div
      className={`task-card id-${id} ${
        isActive ? "task-card-active" : ""
      } ${classes}`}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onCardClick();
      }}
    >
      <div className="info-wrapper">
        <p className="time">Started: {timeStart}</p>
        <hr />
        {tooltipElement(name, id)}
        {timeEnd ? isClosedElement(timeEnd) : ""}
      </div>
    </div>
  </div>
);
export default CCard;
